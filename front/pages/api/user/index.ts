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

    const docRef = doc(db, "users", "user");

    async function getUser() {

        const query = req.query;
        const { handle } = query;

        const doc = await getDoc(docRef);
        try {
            return res.status(200).send(handle);
        }
        catch (err) {
            return res.status(500).send(err);

        }
    }

    function createUser() {
        const docRef = doc(db, "users", req.body.handle);

        try {
            setDoc(docRef, {
                presentation: "",
                photoURL: req.body.photoURL
            });
            return res.status(200).send("created");
        }
        catch (err) {
            return res.status(500).send(err);

        }
    }

    function updateUser() {
        const docRef = doc(db, "users", req.body.handle);

        try {
            setDoc(docRef, {
                presentation: req.body.presentation || "",
                photoURL: req.body.photoURL || ""
            });
            //if user changed his handle, we delete the old one
            if (req.body.oldHandle && req.body.oldHandle !== req.body.handle) {
                deleteDoc(doc(db, "users", req.body.oldHandle))
            }
            return res.status(200).send("updated");
        }
        catch (err) {
            return res.status(500).send(err);
        }
    }

    switch (req.method) {
        case "GET":
            getUser();
            break;
        case "POST":
            createUser();
            break;
        case "PUT":
            updateUser();
            break;
    }

}
