// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { collection, doc, addDoc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from '../../config/firebase';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const docRef = doc(db, "users", req.body.handle);

    async function createUser() {
        const docSnap = await getDoc(docRef);
        //if handle is not available, we set an error message
        if (docSnap.exists()) {
            return res.status(200).send("already taken");
        }

        try {
            await setDoc(docRef, {
                handle: req.body.handle,
                email: req.body.email,
            });
            return res.status(200).send("created");
        }
        catch (err) {
            return res.status(500).send(err);
        }
    }

    createUser();

}
