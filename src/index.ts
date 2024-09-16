import { HttpApp, HttpRouter, HttpServerResponse } from "@effect/platform"

const router = HttpRouter.empty.pipe(
	HttpRouter.get("/", HttpServerResponse.text("Hello withPreResponseHandler")),
	HttpRouter.get("/foo", HttpServerResponse.text("Other Route")),
)

const handler = HttpApp.toWebHandler(router)

export default {
	async fetch(request, env, ctx): Promise<Response> {
		return handler(request)
	},
} satisfies ExportedHandler<Env>
