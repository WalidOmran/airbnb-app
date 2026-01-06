'use strict';

export const PostUserData = async (apiUrl, newItem) => {
        const res = await fetch(apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newItem),
        });

        if (!res.ok) {
                const text = await res.text().catch(() => "");
                throw new Error(`PostData failed: ${res.status} ${res.statusText} ${text}`);
        }

        try {
                return await res.json();
        } catch (e) {
                return null;
        }
};