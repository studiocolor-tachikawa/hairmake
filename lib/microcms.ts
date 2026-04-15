import { createClient } from "microcms-js-sdk";
import type { MicroCMSImage, MicroCMSListResponse } from "microcms-js-sdk";

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN ?? "";
const apiKey = process.env.MICROCMS_API_KEY ?? "";

const isConfigured = serviceDomain !== "" && apiKey !== "";

const client = isConfigured
  ? createClient({ serviceDomain, apiKey })
  : null;

export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

const emptyList: MicroCMSListResponse<Blog> = {
  contents: [],
  totalCount: 0,
  offset: 0,
  limit: 0,
};

export async function getBlogList(limit?: number): Promise<MicroCMSListResponse<Blog>> {
  if (!client) return emptyList;
  return client.getList<Blog>({
    endpoint: "blogs",
    queries: {
      limit: limit ?? 100,
      orders: "-publishedAt",
    },
  });
}

export async function getBlogDetail(id: string): Promise<Blog | null> {
  if (!client) return null;
  return client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId: id,
  });
}
