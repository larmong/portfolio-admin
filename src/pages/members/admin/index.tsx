import { useEffect, useState } from "react";
import { MembersDataType } from "@pages/members/type";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";

import { db } from "@commons/libraries/firebase/firebase.config";
import Board from "@components/board";

export default function Admin() {
  const [data, setData] = useState<MembersDataType[] | []>([]);

  useEffect(() => {
    const getBoardData = async () => {
      const data = await query(
        collection(db, "user"),
        where("level", "==", 10),
        orderBy("createDt", "desc")
      );
      const getData = await getDocs(data);
      const result: any = getData.docs.map((doc) => ({
        ...doc.data(),
        key: doc.id,
      }));

      setData(result || []);
    };

    void getBoardData();
  }, []);

  return <Board data={data} />;
}
