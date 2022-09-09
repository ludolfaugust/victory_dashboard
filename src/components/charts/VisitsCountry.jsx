import "./charts.scss";
import {
  Bar,
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryLegend,
  VictoryScatter,
  VictoryTooltip,
} from "victory";

const VisitsCountry = ({ title, sortVisitsCountry }) => {

  console.log(sortVisitsCountry)
  const slicedArray = sortVisitsCountry.slice(0, 5);
  const restArray = sortVisitsCountry
    .slice(-3)
    .map((number) => number.number)
    .reduce((current, item) => current + item);
  slicedArray.push({ country: "Weitere", number: restArray });
  const chartData = slicedArray.map((item) => {
    return {
      country: item.country,
      number: item.number,
      label: `${item.number} Persons
      ${item.average_age === undefined ? "" : `Ø age ${item.average_age} `}`,
    };
  });

  const sharedAxisStyles = {
    tickLabels: {
      fontSize: 13,
    },
    axisLabel: {
      padding: 39,
      fontSize: 13,
    },
    axis: { stroke: "none" },
  };

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <VictoryChart domainPadding={25}>
        <VictoryBar
          labelComponent={
                    <VictoryTooltip
                     
                    />}
          data={chartData}
          x="country"
          y="number"
          barWidth={35}
          style={{ data: { fill: "rgb(62,66,94)" } }}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          dataComponent={
      <Bar
        events={{
          onClick:() => alert("hello")}}
      />
    }
          events={[
                    {
                      target: 'data',
                      eventHandlers: {
                        onMouseOver: () => [
                          {
                            target: 'data',
                            mutation: () => ({ style: { fill: '#8093E0', cursor: 'pointer' } }),
                          },
                          {
                            target: 'labels',
                            mutation: () => ({ active: true }),
                          },
                        ],
                        onMouseOut: () => [
                          {
                            target: 'data',
                            mutation: () => {},
                          },
                          {
                            target: 'labels',
                            mutation: () => ({ active: false }),
                          },
                        ],
                      },
                    },
                  ]}
        />
        <VictoryAxis style={sharedAxisStyles} />
        <VictoryAxis
          dependentAxis
          style={sharedAxisStyles}
          axisLabelComponent={<VictoryLabel dy={-12} />}
          label={"Visits"}
        />
      </VictoryChart>
    </div>
  );
};

export default VisitsCountry;