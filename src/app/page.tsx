"use client";

import { client } from "@/libs/client";
import type { InferRequestType } from "hono";
import useSWR from "swr";

export default function Home() {
	const $get = client.api.ping.$get;
	const fetcher = (arg: InferRequestType<typeof $get>) => async () => {
		const res = await $get(arg);
		return res;
	};
	const { data, error, isLoading } = useSWR("api-ping", fetcher({}));

	if (isLoading) return <div>Loading...</div>;
	if (error || !data) return <div>Error: {error || "no data"}</div>;
	return <div>API status: {data.statusText}</div>;
}
