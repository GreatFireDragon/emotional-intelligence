import { redirect } from "@sveltejs/kit";

export async function load() {}

const actions = {
  setTheme: async ({ url, cookies }) => {
    const theme = url.searchParams.get("theme");
    const redirectTo = url.searchParams.get("redirectTo");

    if (theme) {
      cookies.set("colortheme", theme, { secure: false, path: "/" });
    }

    throw redirect(303, redirectTo ?? "/");
  },
};

export { actions };
