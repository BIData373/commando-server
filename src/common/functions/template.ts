import Handlebars from "handlebars";

export function renderTemplate(template: string, variables: Record<string, any>): string {
    const compiledTemplate = Handlebars.compile(template, { strict: true });
    return compiledTemplate(variables);
}