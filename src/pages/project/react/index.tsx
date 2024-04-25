import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";

import { db } from "@commons/libraries/firebase/firebase.config";
import { Wrapper } from "@pages/project/react/style";
import { ProjectDataType } from "@pages/project/type";
import Board from "@components/board";

export default function React() {
  const [data, setData] = useState<ProjectDataType[] | []>([]);

  useEffect(() => {
    const getBoardData = async () => {
      const data = await query(
        collection(db, "projects"),
        where("categoryId", "==", "react"),
        orderBy("num", "desc")
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

  return (
    <Wrapper>
      <Board data={data} />
    </Wrapper>
  );
}
