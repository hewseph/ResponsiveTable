import React, { useState } from "react"
import './App.css';
import { data, headers } from './data'
import styled from 'styled-components'

const logs = [
  [
    "07/21/2020",
    "Some message log info here. And some blah blah blah. Cool OK"
  ],
  [
    "07/21/2020",
    "Some message log info here. And some blah blah blah. Cool OK"
  ],
  [
    "07/21/2020",
    "Some message log info here. And some blah blah blah. Cool OK"
  ],
  [
    "07/21/2020",
    "Some message log info here. And some blah blah blah. Cool OK"
  ],
  [
    "07/21/2020",
    "Some message log info here. And some blah blah blah. Cool OK"
  ],
  [
    "07/21/2020",
    "Some message log info here. And some blah blah blah. Cool OK"
  ]
]
function App() {
  const [showRowDetails, setShowRowDetails] = useState(-1)
  return (
    <Table>
      {headers.map(th => (
        <Header>
          <strong>{th}</strong>
        </Header>
      ))}
      {data.map((tr, r) => (
        <TableRow
          rowDetails={showRowDetails === r}
          toggleRowDetails={() => setShowRowDetails(showRowDetails === r ? -1 : r)}
          secondary={r % 2 === 0}
          key={`row${r}`}
          tr={tr} />
      ))}
    </Table>
  )
}

const TableRow = ({ tr, secondary, rowDetails, toggleRowDetails }) => {
  const [showLogs, setShowLogs] = useState(false)
  return (
    <>
      {tr.map(td => (
        <Cell secondary={secondary} tertiary={rowDetails} onClick={() => toggleRowDetails()} key={td}>{td}</Cell>
      ))}
      <RowDetails duration={350} height={showLogs ? 400 : 110} collapsed={!rowDetails}>
        <SpecialCell color="gray">{tr[0]}</SpecialCell>
        <SpecialCell color="gray">{tr[1]}</SpecialCell>
        <SpecialCell color="gray">{tr[2]}</SpecialCell>
        <SpecialCell color="gray">{tr[3]}</SpecialCell>
        <SpecialCell color="gray">{tr[4]}</SpecialCell>
        <SpecialCell color="gray">Current Date and Time</SpecialCell>
        <SpecialCell color="gray"><button>Facility Transfer</button></SpecialCell>
        <SpecialCell color="gray" styles={{
          display: "grid",
          gridTemplateColumns: `1fr 1fr 1fr`
        }}>
          <button>Facility Transfer</button>
          <button>Facility Transfer</button>
          <button>Facility Transfer</button>
        </SpecialCell>
        <SpecialCell color="gray" styles={{ textAlign: "right" }}>
          <button onClick={() => setShowLogs(!showLogs)} style={{ margin: "auto" }}>{showLogs ? "Hide Logs" : "View Logs"}</button>
        </SpecialCell>
        <SpecialCell span={4} />
        {/** Start Log Table below */}
        <SpecialCell styles={{ gridColumn: 3 }}>
          Updated On
        </SpecialCell>
        <SpecialCell styles={{ gridColumn: 4 }}>
          Description
        </SpecialCell>
        {logs.map((logInfo, i) => (
          <>
            <SpecialCell secondary={i % 2 === 0} styles={{ gridColumn: 3 }}>
              {logInfo[0]}
            </SpecialCell>
            <SpecialCell secondary={i % 2 === 0} span={4}>
              {logInfo[1]}
            </SpecialCell>
          </>
        ))}
        <Stuff>
          DO STUFF HERE
        </Stuff>
      </RowDetails>
    </>
  )
}

const gridProps = {
  display: 'grid',
  gridTemplateColumns: `
    minmax(200px, 1fr)
    minmax(100px, 1fr)
    minmax(100px, 1fr)
    minmax(200px, 1fr)
    minmax(100px, 1fr)
    minmax(100px, 1fr)
    minmax(200px, 2fr)
  `
}

const Header = styled.span`
  background: #6c7ae0;
  text-align: left;
  font-weight: normal;
  font-size: 1.1rem;
  color: white;
`

const Table = styled.span({
  ...gridProps,
  overflow: "hidden",
  overflowX: "scroll",
  "::-webkit-scrollbar": {
    height: "0px", /* Remove scrollbar space */
    width: "0px", /* Remove scrollbar space */
  },
  borderTop: "1px solid black",
  borderRight: "1px solid black",
})

const Cell = styled.span(props => ({
  backgroundColor: "white",
  textAlign: "left",
  padding: "8px 4px",
  borderLeft: "1px solid black",
  borderBottom: "1px solid black",
  cursor: "pointer",
  gridColumn: "1 span",
  ...(props.secondary ? {
    backgroundColor: "lightgrey"
  } : {}),
  ...(props.tertiary ? {
    backgroundColor: "#cf7e7e"
  } : {})
}))

const SpecialCell = styled(Cell)(props => ({
  borderLeft: "none",
  borderBottom: "none",
  ...(props.span ? { gridColumn: `${props.span} span` } : {}),
  ...(props.color ? { color: props.color } : {}),
  ...(props.styles ? props.styles : {})
}))

const Stuff = styled.div({
  padding: "100px",
  gridColumn: "1/-1",
})

const RowDetails = styled.span(props => ({
  ...gridProps,
  textAlign: "center",
  gridColumn: "1/-1",
  padding: "0",
  borderLeft: "none",
  borderBottom: "none",
  overflow: 'hidden',
  transition: props.duration ? `max-height ${props.duration / 1000}s ease-in` : 'max-height:0.5s ease-in',
  ...(props.collapsed ? {
    borderLeft: "none",
    borderBbottom: "none",
    maxHeight: "0px",
  } : {
    borderLeft: "1px solid black",
    borderBottom: "1px solid black",
    maxHeight: props.height,
  }),
}))

export default App;
