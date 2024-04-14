import { lyla } from "@/utils/request";

type Repo = {
  name: string;
  description: string;
  html_url: string;
}

interface Item {
  id: number;
  category: {
    id: number;
    name: string;
  };
  name: string;
  photoUrls: string[];
  tags: {
    id: number;
    name: string;
  }[];
  status: string;
}

export function getRepoList(data: { status: string }) {
  return lyla<Item>({
    method: 'get',
    url: '/pet/findByStatus',
    query: data
  })
}