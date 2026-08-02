import { PrismaPg } from '@prisma/adapter-pg';
import { databaseUrl, postgresPrismaUrl } from '../src/common/consts/env';
import { DEFAULT_STATUSES } from '../src/entities/workspace-status/consts/default-statuses';
import { DeadlineType, HistoryAction, PermissionType, PrismaClient, TaskCreationType, WorkspaceStatusType } from '../src/types/prisma';

const connectionString = postgresPrismaUrl ?? databaseUrl
const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Seeding database...');

  console.time('* DB Clean Up')
  // Cleanup in reverse FK dependency order
  await prisma.taskHistory.deleteMany();
  await prisma.message.deleteMany();
  await prisma.assigneeTaskStatus.deleteMany();
  await prisma.task.deleteMany();
  await prisma.source.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.permission.deleteMany();
  await prisma.assignee.deleteMany();
  await prisma.workspaceStatus.deleteMany();
  await prisma.workspace.deleteMany();
  await prisma.pikud.deleteMany();
  await prisma.user.deleteMany();
  console.timeEnd('* DB Clean Up')

  console.log('* Creating Users')
  // ── Users ─────────────────────────────────────────────────────────────────
  const [u1, u2, u3, u4, u5, u6, u7, u8, u9, u10, u11, u12] = await Promise.all([
    prisma.user.create({ data: { upn: 'yael', info: { upn: 'yael', name: 'סא"ל כהן', displayName: 'סא"ל כהן', } } }),
    prisma.user.create({ data: { upn: 'avi', info: { upn: 'avi', name: 'רס"ן לוי', displayName: 'רס"ן לוי', } } }),
    prisma.user.create({ data: { upn: 'dana', info: { upn: 'dana', name: 'סרן מזרחי', displayName: 'סרן מזרחי', } } }),
    prisma.user.create({ data: { upn: 'moshe', info: { upn: 'moshe', name: 'רב"ט ישראלי', displayName: 'רב"ט ישראלי', } } }),
    prisma.user.create({ data: { upn: 'noa', info: { upn: 'noa', name: 'סמ"ר ברק', displayName: 'סמ"ר ברק', } } }),
    prisma.user.create({ data: { upn: 'oren', info: { upn: 'oren', name: 'נועה ברקוביץ', displayName: 'נועה ברקוביץ', } } }),
    prisma.user.create({ data: { upn: 'shapira', info: { upn: 'shapira', name: 'אורן שפירא', displayName: 'אורן שפירא', } } }),
    prisma.user.create({ data: { upn: 'tamar', info: { upn: 'tamar', name: 'תמר אבידן', displayName: 'תמר אבידן', } } }),
    prisma.user.create({ data: { upn: 'gil', info: { upn: 'gil', name: 'גיל נחמן', displayName: 'גיל נחמן', } } }),
    prisma.user.create({ data: { upn: 'sara', info: { upn: 'sara', name: 'שרה ויסמן', displayName: 'שרה ויסמן', } } }),
    prisma.user.create({ data: { upn: 'binyamin', info: { upn: 'binyamin', name: 'בנימין חזן', displayName: 'בנימין חזן', } } }),
    prisma.user.create({ data: { upn: 'dina', info: { upn: 'dina', name: 'דינה אורן', displayName: 'דינה אורן', } } }),
  ]);

  console.log('* Creating Pikuds')
  // ── Pikud ─────────────────────────────────────────────────────────────────
  const pikud = await prisma.pikud.create({
    data: { name: 'פיקוד מרכז', createdBy: u1.id, updatedBy: u1.id },
  });

  console.log('* Creating Workspaces')
  // ── Workspaces ────────────────────────────────────────────────────────────
  const [ws1, ws2, ws3] = await Promise.all([
    prisma.workspace.create({
      data: { title: 'מפקדת חטיבה', urlName: 'hativa', pikudId: pikud.id, createdBy: u1.id, updatedBy: u1.id },
    }),
    prisma.workspace.create({
      data: { title: 'מערך תקשו"ב', urlName: 'techshuv', pikudId: pikud.id, createdBy: u2.id, updatedBy: u2.id },
    }),
    prisma.workspace.create({
      data: { title: 'מערך לוגיסטי', urlName: 'logistics', pikudId: pikud.id, createdBy: u3.id, updatedBy: u3.id },
    }),
  ]);

  console.log('* Creating Workspace Statuses')
  // ── WorkspaceStatuses (3 per workspace) ───────────────────────────────────
  const createStatuses = (workspaceId: number) =>
    Promise.all(DEFAULT_STATUSES.map((s) => prisma.workspaceStatus.create({ data: { ...s, workspaceId } })));

  const [
    [ws1NotStarted, ws1InProgress, ws1Completed],
    [ws2NotStarted, ws2InProgress, ws2Completed],
    [ws3NotStarted, ws3InProgress, ws3Completed],
  ] = await Promise.all([createStatuses(ws1.id), createStatuses(ws2.id), createStatuses(ws3.id)]);

  const statusIdByType = {
    [ws1.id]: { [WorkspaceStatusType.NOT_STARTED]: ws1NotStarted.id, [WorkspaceStatusType.IN_PROGRESS]: ws1InProgress.id, [WorkspaceStatusType.COMPLETED]: ws1Completed.id },
    [ws2.id]: { [WorkspaceStatusType.NOT_STARTED]: ws2NotStarted.id, [WorkspaceStatusType.IN_PROGRESS]: ws2InProgress.id, [WorkspaceStatusType.COMPLETED]: ws2Completed.id },
    [ws3.id]: { [WorkspaceStatusType.NOT_STARTED]: ws3NotStarted.id, [WorkspaceStatusType.IN_PROGRESS]: ws3InProgress.id, [WorkspaceStatusType.COMPLETED]: ws3Completed.id },
  } as Record<number, Record<string, number>>;

  console.log('* Creating Assignees')
  // ── Assignees ─────────────────────────────────────────────────────────────
  const [a1, a2, a3, a4, a5, a6, a7, a8] = await Promise.all([
    // workspace 1
    prisma.assignee.create({ data: { name: 'מחלקת מבצעים', color: '#3B82F6', workspaceId: ws1.id, createdBy: u1.id, updatedBy: u1.id, users: { connect: [{ id: u1.id }, { id: u2.id }] } } }),
    prisma.assignee.create({ data: { name: 'צוות לוגיסטיקה', color: '#10B981', workspaceId: ws1.id, createdBy: u1.id, updatedBy: u1.id, users: { connect: [{ id: u3.id }, { id: u4.id }] } } }),
    prisma.assignee.create({ data: { name: 'קצינת מודיעין', color: '#F59E0B', workspaceId: ws1.id, createdBy: u1.id, updatedBy: u1.id, users: { connect: [{ id: u5.id }] } } }),
    prisma.assignee.create({ data: { name: "פלוגה א'", color: '#EF4444', workspaceId: ws1.id, createdBy: u1.id, updatedBy: u1.id, users: { connect: [{ id: u4.id }, { id: u6.id }] } } }),
    prisma.assignee.create({ data: { name: 'קצין קשר', color: '#8B5CF6', workspaceId: ws1.id, createdBy: u1.id, updatedBy: u1.id, users: { connect: [{ id: u5.id }, { id: u6.id }] } } }),
    prisma.assignee.create({ data: { name: 'מפקדת הגדוד', color: '#EC4899', workspaceId: ws1.id, createdBy: u1.id, updatedBy: u1.id, users: { connect: [{ id: u1.id }, { id: u2.id }, { id: u3.id }] } } }),
    // workspace 2
    prisma.assignee.create({ data: { name: 'צוות פיתוח', color: '#06B6D4', workspaceId: ws2.id, createdBy: u2.id, updatedBy: u2.id, users: { connect: [{ id: u2.id }, { id: u4.id }, { id: u5.id }] } } }),
    // workspace 3
    prisma.assignee.create({ data: { name: 'צוות לוגיסטי', color: '#F97316', workspaceId: ws3.id, createdBy: u3.id, updatedBy: u3.id, users: { connect: [{ id: u3.id }, { id: u6.id }] } } }),
  ]);

  console.log('* Creating Permissions')
  // ── Permissions ───────────────────────────────────────────────────────────
  await prisma.permission.createMany({
    data: [
      // workspace 1 (env-01: users 1–6)
      { userId: u1.id, workspaceId: ws1.id, type: PermissionType.MANAGER },
      { userId: u2.id, workspaceId: ws1.id, type: PermissionType.MANAGER },
      { userId: u3.id, workspaceId: ws1.id, type: PermissionType.VIEWER },
      { userId: u4.id, workspaceId: ws1.id, type: PermissionType.VIEWER },
      { userId: u5.id, workspaceId: ws1.id, type: PermissionType.VIEWER },
      { userId: u6.id, workspaceId: ws1.id, type: PermissionType.VIEWER },
      // workspace 2
      { userId: u2.id, workspaceId: ws2.id, type: PermissionType.MANAGER },
      { userId: u4.id, workspaceId: ws2.id, type: PermissionType.VIEWER },
      { userId: u5.id, workspaceId: ws2.id, type: PermissionType.VIEWER },
      // workspace 3
      { userId: u3.id, workspaceId: ws3.id, type: PermissionType.MANAGER },
      { userId: u1.id, workspaceId: ws3.id, type: PermissionType.VIEWER },
      { userId: u6.id, workspaceId: ws3.id, type: PermissionType.VIEWER },
    ],
  });

  console.log('* Creating Tags')
  // ── Tags ──────────────────────────────────────────────────────────────────
  const [tBudget, tHR, tIT, tOps, tField, tDev, tQA] = await Promise.all([
    prisma.tag.create({ data: { name: 'תקציב', workspaceId: ws1.id, createdBy: u1.id, updatedBy: u1.id } }),
    prisma.tag.create({ data: { name: 'כ"א', workspaceId: ws1.id, createdBy: u1.id, updatedBy: u1.id } }),
    prisma.tag.create({ data: { name: 'תקשו"ב', workspaceId: ws1.id, createdBy: u1.id, updatedBy: u1.id } }),
    prisma.tag.create({ data: { name: 'מבצעים', workspaceId: ws1.id, createdBy: u1.id, updatedBy: u1.id } }),
    prisma.tag.create({ data: { name: 'פקש"ש', workspaceId: ws1.id, createdBy: u1.id, updatedBy: u1.id } }),
    prisma.tag.create({ data: { name: 'פיתוח', workspaceId: ws2.id, createdBy: u2.id, updatedBy: u2.id } }),
    prisma.tag.create({ data: { name: 'בקרה', workspaceId: ws2.id, createdBy: u2.id, updatedBy: u2.id } }),
  ]);

  console.log('* Creating Sources')
  // ── Sources ───────────────────────────────────────────────────────────────
  const [
    src01, src02, src03, src04, src05, src06, src07, src08, src09,
    src10, src11, src12, src13, src14, src15, src16, src17,
  ] = await Promise.all([
    prisma.source.create({ data: { date: new Date(), name: 'ישיבת הנהלה', draft: false, workspaceId: ws1.id, createdBy: u1.id, updatedBy: u1.id } }),
    prisma.source.create({ data: { date: new Date(), name: 'דיון עם סמנכ"ל טכנולוגיה', draft: false, workspaceId: ws1.id, createdBy: u1.id, updatedBy: u1.id } }),
    prisma.source.create({ data: { date: new Date(), name: 'ישיבת הנהלה', draft: false, workspaceId: ws1.id, createdBy: u2.id, updatedBy: u2.id } }),
    prisma.source.create({ data: { date: new Date(), name: 'ישיבת שיווק', draft: false, workspaceId: ws1.id, createdBy: u3.id, updatedBy: u3.id } }),
    prisma.source.create({ data: { date: new Date(), name: 'ישיבת דירקטוריון', draft: false, workspaceId: ws1.id, createdBy: u1.id, updatedBy: u1.id } }),
    prisma.source.create({ data: { date: new Date(), name: 'החלטת הנהלה', draft: false, workspaceId: ws1.id, createdBy: u1.id, updatedBy: u1.id } }),
    prisma.source.create({ data: { date: new Date(), name: 'ועדת ביקורת', draft: true, workspaceId: ws1.id, createdBy: u2.id, updatedBy: u2.id } }),
    prisma.source.create({ data: { date: new Date(), name: 'דוח תקלות ינואר', draft: false, workspaceId: ws1.id, createdBy: u2.id, updatedBy: u2.id } }),
    prisma.source.create({ data: { date: new Date(), name: 'ישיבת הנהלה', draft: false, workspaceId: ws1.id, createdBy: u1.id, updatedBy: u1.id } }),
    prisma.source.create({ data: { date: new Date(), name: 'מחלקת רכש', draft: false, workspaceId: ws1.id, createdBy: u4.id, updatedBy: u4.id } }),
    prisma.source.create({ data: { date: new Date(), name: 'מחלקת משאבי אנוש', draft: true, workspaceId: ws1.id, createdBy: u3.id, updatedBy: u3.id } }),
    prisma.source.create({ data: { date: new Date(), name: 'ישיבת דירקטוריון', draft: false, workspaceId: ws1.id, createdBy: u1.id, updatedBy: u1.id } }),
    prisma.source.create({ data: { date: new Date(), name: 'Sprint Planning', draft: false, workspaceId: ws2.id, createdBy: u2.id, updatedBy: u2.id } }),
    prisma.source.create({ data: { date: new Date(), name: 'Retro', draft: false, workspaceId: ws2.id, createdBy: u2.id, updatedBy: u2.id } }),
    prisma.source.create({ data: { date: new Date(), name: 'Sprint Planning', draft: true, workspaceId: ws2.id, createdBy: u2.id, updatedBy: u2.id } }),
    prisma.source.create({ data: { date: new Date(), name: 'ישיבת שיווק', draft: false, workspaceId: ws3.id, createdBy: u3.id, updatedBy: u3.id } }),
    prisma.source.create({ data: { date: new Date(), name: 'ישיבת הנהלה', draft: false, workspaceId: ws3.id, createdBy: u3.id, updatedBy: u3.id } }),
  ]);

  const RANDOM_DESCRIPTIONS = [
    'ממתין לאישור מהגורם המוסמך',
    'בתהליך ביצוע — צפוי להסתיים עד סוף השבוע',
    'הועבר לטיפול הגורם הרלוונטי',
    'נדרש תיאום עם יחידות נוספות לפני המשך',
    'בבדיקה — ממתין לקבלת נתונים משלימים',
    'הושלם שלב ראשוני, ממשיך לשלב הבא',
    'בתכנון — טרם החל ביצוע',
    'ממתין לתגובת הספק',
    'בביצוע — נתקל בעיכוב קל, מטופל',
    'הסתיים בהצלחה, ממתין לאימות סופי',
  ];
  const randomDesc = () => RANDOM_DESCRIPTIONS[Math.floor(Math.random() * RANDOM_DESCRIPTIONS.length)];

  // ── Tasks + AssigneeTaskStatus + TaskHistory ───────────────────────────────
  const taskDefs = [
    {
      title: 'הכנת תקציב שנתי לשנת 2026',
      description: '## משימה\nיש להכין את התקציב השנתי לשנת 2026 כולל:\n- תקציב תפעולי\n- תקציב פיתוח\n- תקציב שיווק\n\n### הערות\nיש לתאם עם מחלקת כספים לגבי תחזיות ההכנסות.',
      flagged: true,
      creationType: TaskCreationType.HUMAN,
      deadlineType: DeadlineType.ROLLING,
      dueDate: new Date('2026-03-01T00:00:00Z'),
      workspaceId: ws1.id, sourceId: src01.id, createdBy: u1.id,
      tagIds: [tBudget.id, tHR.id],
      assignees: [
        { assigneeId: a1.id, statusType: WorkspaceStatusType.IN_PROGRESS },
        { assigneeId: a2.id, statusType: WorkspaceStatusType.NOT_STARTED },
      ],
    },
    {
      title: 'גיוס מנהל פיתוח בכיר',
      description: 'יש לפתוח תהליך גיוס למנהל פיתוח בכיר. כולל:\n- הגדרת דרישות התפקיד\n- פרסום המשרה\n- סינון ראשוני של מועמדים',
      flagged: true,
      creationType: TaskCreationType.HUMAN,
      deadlineType: DeadlineType.IMMEDIATE,
      workspaceId: ws1.id, sourceId: src02.id, createdBy: u1.id,
      tagIds: [tHR.id],
      assignees: [
        { assigneeId: a3.id, statusType: WorkspaceStatusType.NOT_STARTED },
      ],
    },
    {
      title: 'עדכון מדיניות אבטחת מידע',
      description: 'עדכון מדיניות אבטחת המידע בהתאם לתקנות החדשות. יש לכלול:\n- סקירת נהלים קיימים\n- התאמה לרגולציה\n- הדרכת עובדים',
      flagged: false,
      creationType: TaskCreationType.AI_HUMAN,
      deadlineType: DeadlineType.DATE,
      dueDate: new Date('2026-02-28T00:00:00Z'),
      workspaceId: ws1.id, sourceId: src03.id, createdBy: u2.id,
      tagIds: [tIT.id, tField.id],
      assignees: [
        { assigneeId: a5.id, statusType: WorkspaceStatusType.IN_PROGRESS },
        { assigneeId: a4.id, statusType: WorkspaceStatusType.IN_PROGRESS },
      ],
    },
    {
      title: 'השקת קמפיין שיווקי לרבעון 2',
      description: 'תכנון והשקת קמפיין שיווקי חדש לרבעון השני של 2026.',
      flagged: false,
      creationType: TaskCreationType.HUMAN,
      deadlineType: DeadlineType.ROLLING,
      dueDate: new Date('2026-04-01T00:00:00Z'),
      workspaceId: ws1.id, sourceId: src04.id, createdBy: u3.id,
      tagIds: [tOps.id],
      assignees: [
        { assigneeId: a2.id, statusType: WorkspaceStatusType.NOT_STARTED },
      ],
    },
    {
      title: 'סיכום ישיבת דירקטוריון Q4 2025',
      description: 'סיכום ותיעוד ההחלטות מישיבת הדירקטוריון.',
      flagged: false,
      creationType: TaskCreationType.AI,
      deadlineType: DeadlineType.DATE,
      dueDate: new Date('2026-01-15T00:00:00Z'),
      workspaceId: ws1.id, sourceId: src05.id, createdBy: u1.id,
      tagIds: [],
      assignees: [
        { assigneeId: a1.id, statusType: WorkspaceStatusType.COMPLETED },
      ],
    },
    {
      title: 'הטמעת מערכת ERP חדשה',
      description: 'ניהול תהליך הטמעת מערכת ERP חדשה בארגון. שלבים:\n1. בחירת ספק\n2. POC\n3. פיילוט\n4. הטמעה מלאה',
      flagged: true,
      creationType: TaskCreationType.HUMAN,
      deadlineType: DeadlineType.ROLLING,
      dueDate: new Date('2026-06-30T00:00:00Z'),
      workspaceId: ws1.id, sourceId: src06.id, createdBy: u1.id,
      tagIds: [tBudget.id, tIT.id],
      assignees: [
        { assigneeId: a1.id, statusType: WorkspaceStatusType.NOT_STARTED },
        { assigneeId: a5.id, statusType: WorkspaceStatusType.NOT_STARTED },
        { assigneeId: a4.id, statusType: WorkspaceStatusType.NOT_STARTED },
      ],
    },
    {
      title: 'ביקורת פנימית - תהליכי רכש',
      description: 'ביצוע ביקורת פנימית על תהליכי הרכש בארגון.',
      flagged: false,
      creationType: TaskCreationType.AI_HUMAN,
      deadlineType: DeadlineType.ROLLING,
      dueDate: new Date('2026-01-31T00:00:00Z'),
      workspaceId: ws1.id, sourceId: src07.id, createdBy: u2.id,
      tagIds: [tBudget.id, tField.id],
      assignees: [
        { assigneeId: a5.id, statusType: WorkspaceStatusType.COMPLETED },
      ],
    },
    {
      title: 'שדרוג תשתיות שרתים',
      description: 'שדרוג תשתיות השרתים המרכזיים של הארגון.',
      flagged: true,
      creationType: TaskCreationType.HUMAN,
      deadlineType: DeadlineType.IMMEDIATE,
      workspaceId: ws1.id, sourceId: src08.id, createdBy: u2.id,
      tagIds: [tIT.id],
      assignees: [
        { assigneeId: a4.id, statusType: WorkspaceStatusType.IN_PROGRESS },
        { assigneeId: a5.id, statusType: WorkspaceStatusType.IN_PROGRESS },
      ],
    },
    {
      title: 'הכנת מצגת למשקיעים',
      description: 'הכנת מצגת עדכנית למפגש המשקיעים הקרוב.',
      flagged: false,
      creationType: TaskCreationType.AI,
      deadlineType: DeadlineType.DATE,
      dueDate: new Date('2026-03-15T00:00:00Z'),
      workspaceId: ws1.id, sourceId: src09.id, createdBy: u1.id,
      tagIds: [tBudget.id, tOps.id],
      assignees: [
        { assigneeId: a6.id, statusType: WorkspaceStatusType.NOT_STARTED },
      ],
    },
    {
      title: 'חידוש חוזה ספק תקשורת',
      description: 'ניהול מו"מ וחידוש חוזה מול ספק התקשורת.',
      flagged: false,
      creationType: TaskCreationType.HUMAN,
      deadlineType: DeadlineType.ROLLING,
      dueDate: new Date('2026-02-10T00:00:00Z'),
      workspaceId: ws1.id, sourceId: src10.id, createdBy: u4.id,
      tagIds: [tBudget.id],
      assignees: [
        { assigneeId: a2.id, statusType: WorkspaceStatusType.COMPLETED },
      ],
    },
    {
      title: 'תכנית הדרכות עובדים Q1 2026',
      description: 'תכנון וביצוע תכנית הדרכות לרבעון הראשון.',
      flagged: false,
      creationType: TaskCreationType.AI_HUMAN,
      deadlineType: DeadlineType.ROLLING,
      dueDate: new Date('2026-03-31T00:00:00Z'),
      workspaceId: ws1.id, sourceId: src11.id, createdBy: u3.id,
      tagIds: [tHR.id],
      assignees: [
        { assigneeId: a2.id, statusType: WorkspaceStatusType.IN_PROGRESS },
        { assigneeId: a3.id, statusType: WorkspaceStatusType.NOT_STARTED },
      ],
    },
    {
      title: 'בחינת מיזוג עם חברת אלפא',
      description: 'בחינה ראשונית של אפשרות מיזוג אסטרטגי.',
      flagged: false,
      creationType: TaskCreationType.AI,
      deadlineType: DeadlineType.ROLLING,
      workspaceId: ws1.id, sourceId: src12.id, createdBy: u1.id,
      tagIds: [tBudget.id],
      assignees: [
        { assigneeId: a6.id, statusType: WorkspaceStatusType.NOT_STARTED },
      ],
    },
    {
      title: 'שדרוג React לגרסה 19',
      description: 'שדרוג ה-framework לגרסה האחרונה עם בדיקות רגרסיה.',
      flagged: true,
      creationType: TaskCreationType.HUMAN,
      deadlineType: DeadlineType.DATE,
      dueDate: new Date('2026-03-01T00:00:00Z'),
      workspaceId: ws2.id, sourceId: src13.id, createdBy: u2.id,
      tagIds: [tDev.id, tQA.id],
      assignees: [
        { assigneeId: a7.id, statusType: WorkspaceStatusType.IN_PROGRESS },
      ],
    },
    {
      title: 'כתיבת תיעוד API חדש',
      description: 'תיעוד כל ה-endpoints החדשים שנוספו ברבעון האחרון.',
      flagged: false,
      creationType: TaskCreationType.AI,
      deadlineType: DeadlineType.ROLLING,
      dueDate: new Date('2026-03-10T00:00:00Z'),
      workspaceId: ws2.id, sourceId: src14.id, createdBy: u2.id,
      tagIds: [tDev.id],
      assignees: [
        { assigneeId: a7.id, statusType: WorkspaceStatusType.NOT_STARTED },
      ],
    },
    {
      title: 'סקירת קוד - מודול תשלומים',
      description: 'ביצוע Code Review למודול התשלומים החדש לפני העלאה לפרודקשן.',
      flagged: true,
      creationType: TaskCreationType.AI_HUMAN,
      deadlineType: DeadlineType.IMMEDIATE,
      workspaceId: ws2.id, sourceId: src15.id, createdBy: u2.id,
      tagIds: [tDev.id, tQA.id],
      assignees: [
        { assigneeId: a7.id, statusType: WorkspaceStatusType.IN_PROGRESS },
      ],
    },
    {
      title: 'הכנת חומרי שיווק לכנס',
      description: 'הכנת ברושורים, מצגות ודוכן לכנס הטכנולוגיה השנתי.',
      flagged: false,
      creationType: TaskCreationType.HUMAN,
      deadlineType: DeadlineType.ROLLING,
      dueDate: new Date('2026-03-20T00:00:00Z'),
      workspaceId: ws3.id, sourceId: src16.id, createdBy: u3.id,
      tagIds: [],
      assignees: [
        { assigneeId: a8.id, statusType: WorkspaceStatusType.NOT_STARTED },
      ],
    },
    {
      title: 'סקר שביעות רצון לקוחות Q1',
      description: 'הפצת סקר לקוחות ועיבוד התוצאות.',
      flagged: false,
      creationType: TaskCreationType.AI_HUMAN,
      deadlineType: DeadlineType.DATE,
      dueDate: new Date('2026-02-15T00:00:00Z'),
      workspaceId: ws3.id, sourceId: src17.id, createdBy: u3.id,
      tagIds: [],
      assignees: [
        { assigneeId: a8.id, statusType: WorkspaceStatusType.COMPLETED },
      ],
    },
  ];

  // Guard: every assignee must belong to the same workspace as its task.
  const assigneeWorkspace: Record<number, number> = {
    [a1.id]: ws1.id, [a2.id]: ws1.id, [a3.id]: ws1.id,
    [a4.id]: ws1.id, [a5.id]: ws1.id, [a6.id]: ws1.id,
    [a7.id]: ws2.id,
    [a8.id]: ws3.id,
  };
  for (const def of taskDefs) {
    for (const { assigneeId } of def.assignees) {
      if (assigneeWorkspace[assigneeId] !== def.workspaceId) {
        throw new Error(
          `Seed integrity error: assignee ${assigneeId} belongs to workspace ${assigneeWorkspace[assigneeId]} but task "${def.title}" is in workspace ${def.workspaceId}`,
        );
      }
    }
  }

  console.log('* Creating Tasks')
  for (const def of taskDefs) {
    await prisma.task.create({
      data: {
        title: def.title,
        description: def.description,
        flagged: def.flagged,
        creationType: def.creationType,
        deadlineType: def.deadlineType,
        ...(def.dueDate && { dueDate: def.dueDate }),
        workspaceId: def.workspaceId,
        sourceId: def.sourceId,
        createdBy: def.createdBy,
        updatedBy: def.createdBy,
        ...(def.tagIds.length > 0 && { tags: { connect: def.tagIds.map((id) => ({ id })) } }),
        assigneeStatuses: {
          create: def.assignees.map(({ assigneeId, statusType }) => ({
            assigneeId,
            statusId: statusIdByType[def.workspaceId][statusType],
            ...(def.assignees.length > 1 && { description: randomDesc() }),
          }))
        },
        history: {
          create: {
            action: HistoryAction.CREATE,
            field: 'task',
            value: def.title,
            workspaceId: def.workspaceId,
            userId: def.createdBy,
          }
        }
      }
    });

  }

  const totalAssigneeStatuses = taskDefs.reduce((s, d) => s + d.assignees.length, 0);
  console.log(`✅ Done — seeded:
  • 12 users
  • 1 pikud, 3 workspaces, 9 workspace statuses
  • 8 assignees, ${taskDefs.reduce((s, d) => s + (d.tagIds?.length ?? 0), 0)} tag links
  • 7 tags, 17 sources
  • 17 tasks with ${totalAssigneeStatuses} assignee statuses and history entries`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
