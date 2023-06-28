import { Category, Post } from "./types/collextion"

export const DUMMY_DATA : Post[] = [
    {
        id: "1",
        title : "First Meetup",
        description : "This is the first meetup",
        category: {
            id: "1",
            title: "Coding"
        },
        author: {
            id: "1",
            first_name: "John",
            last_name: "Doe",
        },
        slug: "first-meetup",
        image: "https://picsum.photos/200/300",
        body: "This is the first meetup body text content for the meetup with id 1 and slug first-meetup and title First Meetup",
        created_at: "2021-08-01T12:00:00.000Z",
        updated_at: "2021-08-01T12:00:00.000Z"
    }
]

export const DUMMY_CATEGORIES : Category[] = [
    {
        id: "1",
        title: "Coding",
        slug: "coding",
        description: "This is the coding category"
    }
]