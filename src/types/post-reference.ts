export type PostReference = {
    uuid: string;
    title: string;
    slug: string;
    postMainImage: {
        uuid: string;
        title: string;
        status: string;
        slug: string;
    };
    editor: {
        uuid: string;
        firstName: string;
        lastName: string;
        createdAt: Date | string;
        updatedAt: Date | string;
    },
    category: {
        uuid: string;
        name: string;
        slug: string;
        createdAt: Date | string;
        updatedAt: Date | string;
    }
}