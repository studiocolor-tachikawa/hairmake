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

type HairStyle = {
  id: string;
  title?: string;
  image?: MicroCMSImage;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type GalleryImageItem = {
  id: string;
  url: string;
  alt: string;
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

export async function getHairGalleryList(limit = 20): Promise<GalleryImageItem[]> {
  if (!client) return [];
  try {
    const res = await client.getList<HairStyle>({
      endpoint: "hairstyle",
      queries: {
        limit,
        orders: "-publishedAt",
      },
    });
    return res.contents
      .map((item) => {
        if (!item.image?.url) return null;
        return {
          id: item.id,
          url: item.image.url,
          alt: "ヘアスタイル",
        };
      })
      .filter((item): item is GalleryImageItem => item !== null);
  } catch {
    return [];
  }
}

type Kitsuke = {
  id: string;
  kitsukeimage?: MicroCMSImage;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export async function getKitsukeGalleryList(limit = 20): Promise<GalleryImageItem[]> {
  if (!client) return [];
  try {
    const res = await client.getList<Kitsuke>({
      endpoint: "kitsuke",
      queries: {
        limit,
        orders: "-publishedAt",
      },
    });
    return res.contents
      .map((item) => {
        if (!item.kitsukeimage?.url) return null;
        return {
          id: item.id,
          url: item.kitsukeimage.url,
          alt: "着付け",
        };
      })
      .filter((item): item is GalleryImageItem => item !== null);
  } catch {
    return [];
  }
}
