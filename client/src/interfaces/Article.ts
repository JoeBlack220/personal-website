export interface Article {
    title: string,
    description: string,
    markdown: string,
    createdAt: Date,
    slug: string,
    sanitizedHtml: string,
    id: string
}

export const fake: Article = {
    title: "fake title",
    description: "some description",
    markdown: "# Some mark down",
    createdAt: new Date(),
    slug: "fakeslug",
    sanitizedHtml: "Nothing",
    id: "fakeid"
}