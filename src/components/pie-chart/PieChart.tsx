import React from "react";
import ReactApexChart from "react-apexcharts";
import * as Styled from "./PieChart.styled";
import { PieChartProps } from "./types";

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const renderNoDataPieChart = () => {
    if (!data || data.length === 0) {
      const chartOptions = {
        labels: ["No Data"],
        colors: ["#d3d3d3"],

        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
      };

      const emptyChartSeries = [1];

      return (
        <Styled.PieChartContainer>
          <ReactApexChart
            options={chartOptions}
            series={emptyChartSeries}
            type="pie"
            width="100%"
            height={450}
          />
        </Styled.PieChartContainer>
      );
    }
  };

  const renderPieChart = () => {
    const chartOptions = {
      labels: data.map((item: any) => item.coinName),
    };
    const chartSeries = data.map((item: any) => item.count);

    return (
      <Styled.PieChartContainer>
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="pie"
          width="100%"
          height={450}
        />
      </Styled.PieChartContainer>
    );
  };

  return (
    <Styled.PieChartContainer>
      {renderNoDataPieChart()}
      {renderPieChart()}
    </Styled.PieChartContainer>
  );
};

export default PieChart;
