import * as prisma from "../integration/index";

export async function GetPosts() {
  const posts = await prisma.GetPosts();

  return posts;
}

export async function GetPostById(id: string) {
  const post = await prisma.GetPostById(id);

  return post;
}

export async function CreatePost(data: any) {
  const now = new Date();
  const postData = {
    ...data,
    created_at: now,
    updated_at: now,
    userID: "642abeeb6e7160c651969049",
  };

  const post = await prisma.CreatePost({ data: postData });

  return post;
}

export async function UpdatePosts(id: string, data: any) {
  const post = await prisma.UpdatePost(id, data);

  return post;
}

export async function DeletePosts(id: string) {
  const post = await prisma.DeletePost(id);

  return post;
}
