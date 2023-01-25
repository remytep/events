// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { useDocument } from 'react-firebase-hooks/firestore';
import { collection, doc, setDoc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { auth, db } from '../../../config/firebase';
import axios from "axios";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    function createHangout() {
        try {
            setDoc(doc(collection(db, "hangout")), {
                event: req.body.event,
                host: req.body.host,
                participants: [req.body.host],
                private: req.body.private
            });
            return res.status(200).send("created");
        }
        catch (err) {
            return res.status(500).send(err);

        }
    }

    function updateHangout() {
        try {
            updateDoc(doc(collection(db, "hangout"), req.body.id), {
                participants: req.body.participants,
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
            createHangout();
            break;
        case "PUT":
            updateHangout();
            break;
    }

}
