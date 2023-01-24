// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { useDocument } from 'react-firebase-hooks/firestore';
import { collection, doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from '../../../config/firebase';
import axios from "axios";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    function createMessage() {
        try {
            setDoc(doc(collection(db, "message")), {
                content: req.body.content,
                createdAt: Date.now(),
                hangout: req.body.hangout,
                sender: req.body.sender,
            });
            return res.status(200).send("created");
        }
        catch (err) {
            return res.status(500).send(err);

        }
    }

    function updateUser() {
        const docRef = doc(db, 'user', req.body.id);

        try {
            setDoc(docRef, {
                event: req.body.handle || "",
                email: req.body.email || "",
                presentation: req.body.presentation || "",
                photoURL: req.body.photoURL || ""
            });
            //if user changed his handle, we delete the old one
            return res.status(200).send("updated");
        }
        catch (err) {
            return res.status(500).send(err);
        }
    }

    switch (req.method) {
        case "POST":
            createMessage();
            break;
        case "PUT":
            updateUser();
            break;
    }

}
