import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import TypeIt from "typeit-react";

import { loadDictFB } from "../redux/modules/dictionary";
import FloatingBtn from "../components/FloatingBtn";
import Word from "../components/Word";

const Main = () => {
  const dispatch = useDispatch();

  // 파이어 베이스 -> 리덕스 데이터 불러오기
  useEffect(() => {
    dispatch(loadDictFB());
  }, []);

  const dictList = useSelector((state) => state.dictionary.list);
  return (
    <>
      <FloatingBtn />
      <MainContainer>
        {dictList[0] === undefined ? (
          <h1>
            <TypeIt>로딩 중......</TypeIt>
          </h1>
        ) : (
          dictList.map((word) => {
            return <Word key={word.id} wordObj={word} />;
          })
        )}
      </MainContainer>
    </>
  );
};

// grid로 반응형 페이지 만들기
const MainContainer = styled.div`
  margin: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 25px;
`;

export default Main;
