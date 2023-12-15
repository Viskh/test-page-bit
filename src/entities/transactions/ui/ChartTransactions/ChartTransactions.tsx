import { FC } from "react";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  ScaleChartOptions,
  Title,
  Tooltip,
} from "chart.js";
import { Transaction } from "shared/api";

import { formatDate } from "./utils/formatDate";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    rightYAxis: {
      position: "right",
      beginAtZero: true,
    },
  } as Partial<ScaleChartOptions<"line">>,
};

export const getData = (transactions: Transaction[]): ChartData<"line"> => {
  return {
    labels: Array.from({ length: 24 }, (_, index) => `${index + 1}ч`),
    datasets: [
      {
        fill: true,
        label: "",
        data: transactions.map((item) => item.amount),
        borderWidth: 1,
        borderColor: "rgba(0, 123, 255, 1)",
        backgroundColor: "rgba(0, 123, 255, 0.5)",
        pointStyle: false,
        yAxisID: "rightYAxis",
      },
    ],
  };
};

type ChartTransactionsProps = {
  transactions: Transaction[];
};

export const ChartTransactions: FC<ChartTransactionsProps> = ({
  transactions,
}) => {
  const data = getData(transactions);

  return <Line options={options} data={data} height={250} />;
};
