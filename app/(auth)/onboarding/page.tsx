import AccountProfile from "@/components/forms/AccountProfile";

import { currentUser } from "@clerk/nextjs";

async function Page() {

    const user = await currentUser();

    const userInfo = {

    };

    const userData = {
        id: user?.id,
        objectId: userInfo?.id,
        username: userInfo?.username || user?.username,
        name: userInfo?.name || user?.firstName,
        bio: userInfo?.bio || "",
        image: userInfo?.image || user?.imageUrl,
    }

    return (
        <main className="mx-auto flex mx-w-3xl flex-col justify-start px-10 py-10">
            <h1 className="head-text">Onboarding</h1>
            <p className="mt-3 text-base-regular text-light-2">Complete your Profile now to use threads</p>
            <section className="mt-9 bg-dark-2 p-10">
                <AccountProfile user={userData} btnTitle="Continue" />
            </section>

        </main>
    )
}

export default Page;