import React, { useEffect, useState } from "react";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import PageDefault from "../../components/PageDefault";
import api from "../../services/api";

export default function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    async function searchFilmes() {
      const response = await api.get("/filmes");
      setDadosIniciais(response.data);
    }
    searchFilmes();
  }, []);

  return (
    <>
      <PageDefault paddingAll={0}>
        {dadosIniciais.length > 0 && (
          <>
            <BannerMain
              videoTitle={dadosIniciais[0].filmes[0].titulo}
              url={dadosIniciais[0].filmes[0].url}
            />

            {dadosIniciais.map((atual, index) => {
              if (index === 0) {
                return (
                  <Carousel
                    key={atual.name}
                    ignoreFirstVideo
                    category={atual}
                  />
                );
              }
              return <Carousel key={atual.name} category={atual} />;
            })}
          </>
        )}
      </PageDefault>
    </>
  );
}
