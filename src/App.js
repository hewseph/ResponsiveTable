import React, { useState } from "react"
import './App.css';
import { data } from './data'
import styled from 'styled-components'

function App() {
  return (
    <Table>
      <Header>
        <strong>ID</strong>
      </Header>
      <Header>
        <strong>FIrst name</strong>
      </Header>
      <Header>
        <strong>Last name</strong>
      </Header>
      <Header>
        <strong>Email</strong>
      </Header>
      <Header>
        <strong>Street</strong>
      </Header>
      <Header>
        <strong>Country</strong>
      </Header>
      <Header>
        <strong>University</strong>
      </Header>
      <Header>
        <strong>IBAN</strong>
      </Header>
      {data.map((tr, r) => (<TableRow key={`row${r}`} tr={tr} />))}
    </Table>
  )
}

const TableRow = ({ tr }) => {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <>
      {tr.map(td => (
        <Cell onClick={() => setCollapsed(!collapsed)} key={td}>{td}</Cell>
      ))}
      <RowDetails duration={250} height={250} collapsed={collapsed}>
        <Stuff>
          DO STUFF HERE
        </Stuff>
      </RowDetails>
    </>
  )
}

const Header = styled.span`
  background: #6c7ae0;
  text-align: left;
  font-weight: normal;
  font-size: 1.1rem;
  color: white;
`

const Table = styled.span({
  overflow: "hidden",
  overflowX: "scroll",
  "::-webkit-scrollbar": {
    width: "0px", /* Remove scrollbar space */
    background: "transparent"  /* Optional: just make scrollbar invisible */
  },
  display: 'grid',
  borderTop: "1px solid black",
  borderRight: "1px solid black",
  gridTemplateColumns: `
    minmax(60px, 1fr)
    minmax(100px, 1fr)
    minmax(100px, 1fr)
    minmax(200px, 1fr)
    minmax(100px, 1fr)
    minmax(100px, 1fr)
    minmax(200px, 1fr)
    minmax(200px, 1fr)
    `
})

const Cell = styled.span`
  padding: 8px 4px;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  cursor: pointer;
`

const Stuff = styled.div({
  padding: "100px"
})

const RowDetails = styled.span(props => ({
  textAlign: "center",
  gridColumn: "1/-1",
  padding: "0",
  borderLeft: "none",
  borderBottom: "none",
  height: "250px",
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
