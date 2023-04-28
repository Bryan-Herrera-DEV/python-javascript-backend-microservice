import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import Hero from "../../components/hero/Hero.component";
import Nabvar from "../../components/navbar/Nabvar.component";
import Table from "../../components/table/Table.component";
import { getDayEurDollar } from "../../services/data-day-eur-dollar";
import { type CommonResponse, type Conversions } from "../../utils/interfaces";

const Landing = () => {
  const [conversion, setConversion] = useState([] as Conversions[]);
  const getConversion = useMutation({
    mutationFn: getDayEurDollar,
    onSuccess: async (data: CommonResponse) => {
      setConversion(data.data);
    },
    onError: (error: any) => {
      console.log(error);
    },
  });
  useEffect(() => {
    getConversion.mutate();
  }, []);

  return (
    <div>
      <Nabvar />
      <Hero />
      <Table ConversionsData={conversion} />
    </div>
  );
};

export default Landing;
