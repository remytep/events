// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { collection, doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from '../../../config/firebase';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const query = req.query;
    const { slug } = query;
    const docRef = doc(db, "hangout", String(slug));

    async function getHangout() {
        const hangout = await getDoc(docRef);

        try {
            return res.status(200).send(hangout?.data());
        }
        catch (err) {
            return res.status(500).send(err);

        }
    }

    async function deleteHangout() {
        const hangout = await deleteDoc(docRef);

        try {
            return res.status(200).send("deleted");
        }
        catch (err) {
            return res.status(500).send(err);

        }
    }

    switch (req.method) {
        case "GET":
            getHangout();
            break;
        case "DELETE":
            deleteHangout();
            break;

    }

}
