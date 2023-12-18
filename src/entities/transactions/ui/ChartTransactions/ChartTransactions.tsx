import { FC } from "react";
import { graphic } from "echarts";
import ReactECharts from "echarts-for-react";
import { Transaction } from "shared/api";
import { formatDate } from "shared/lib";

type ChartTransactionsProps = {
  transactions: Transaction[];
};

export const ChartTransactions: FC<ChartTransactionsProps> = ({
  transactions,
}) => {
  const options = {
    tooltip: {
      trigger: "axis",
      position: function (pt: any) {
        return [pt[0], "10%"];
      },
    },
    xAxis: {
      data: transactions.map(({ created_at }) =>
        formatDate({ date: created_at, formatDate: "dd LLL yyyy" }),
      ),
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
      position: "right",
    },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 20,
      },
      {
        start: 0,
        end: 20,
      },
    ],
    series: [
      {
        type: "line",
        symbol: "none",
        areaStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(28, 100, 242, 1)",
            },
            {
              offset: 1,
              color: "rgba(28, 100, 242, 0.2)",
            },
          ]),
        },
        data: transactions.map((item) => item.amount),
      },
    ],
  };

  return <ReactECharts option={options} style={{ width: "400%" }} />;
};
