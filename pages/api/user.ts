// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { collection, doc, setDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from '../../config/firebase';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const docRef = doc(db, "users", req.body.handle);

    function createUser(docRef: any) {
        try {
            setDoc(docRef, {
                presentation: ""
            });
            return res.status(200).send("created");
        }
        catch (err) {
            return res.status(500).send(err);

        }
    }

    function updateUser(docRef: any) {
        try {
            setDoc(docRef, {
                presentation: req.body.presentation || ""
            });
            //if user changed his handle, we delete the old one
            if (req.body.oldHandle !== req.body.handle) {
                deleteDoc(doc(db, "users", req.body.oldHandle))
            }
            return res.status(200).send("updated");
        }
        catch (err) {
            return res.status(500).send(err);
        }
    }

    switch (req.method) {
        case "POST":
            createUser(docRef);
        case "PUT":
            updateUser(docRef);
    }

}
