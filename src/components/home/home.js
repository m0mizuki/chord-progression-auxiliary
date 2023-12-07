import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { useEffect } from 'react';
import "./homeStyle.css"

function Home() {
    //初期設定
    const firebaseConfig = {
        apiKey: "AIzaSyBtgL882LxaRzJh15qhH_rn0mDlBakrCFs",
        authDomain: "chord-firebase-2a4d6.firebaseapp.com",
        projectId: "chord-firebase-2a4d6",
        storageBucket: "chord-firebase-2a4d6.appspot.com",
        messagingSenderId: "1080944824000",
        appId: "1:1080944824000:web:f2ba2fc11b744e923b2725"
    };

    // firebaseの初期化
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    //ロード後1回実行
    useEffect(() => {
        //データの作成
        setDoc(doc(db, "madeCol", "madeDoc"), {
            group: "groupName",
            docid: 1234,
            point: 0
        }).then(() => {
            console.log("データの作成に成功.");
        }).catch((error) => {
            console.log("データの作成に失敗:", error);
        });

        //データの読み取り
        getDoc(doc(db, "testCollection", "testDocument")).then((doc) => {
            console.log("データの読み取りに成功.");
            console.log(doc.data().strData);
        }).catch((error) => {
            console.log("データの読み取りに失敗:", error);
        });

        getDoc(doc(db, "testCollection", "testDocument2")).then((doc) => {
            console.log("データの読み取りに成功.");
            const arrData = doc.data().arrData;
            for (let i in arrData)
                console.log(arrData[i]);
        }).catch((error) => {
            console.log("データの読み取りに失敗:", error);
        });

    }, []);



    return (
        <>
            <p>hello world</p>
            <img src={`${process.env.PUBLIC_URL}/img/heart2.png`} className="heartImage"></img>
        </>
    );
}

export default Home;