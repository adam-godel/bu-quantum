'use client'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import hljs from 'highlight.js/lib/core'
import 'highlight.js/styles/gml.css'
import python from 'highlight.js/lib/languages/python'
import React from 'react'
import KatexSpan from 'app/components/latex'
import * as m from 'mafs'
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material'
import { InlineMath } from 'react-katex'

hljs.registerLanguage('python', python)

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th className="font-normal px-6 py-3 border-0.5 border-solid border-white" key={index}>{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td className="px-6 py-3 border-0.5 border-solid border-white" key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table className="text-center mx-auto border-collapse border-0.5 border-solid border-white">
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink(props) {
  let href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

function Code({ children, ...props }) {
  let codeHTML = hljs.highlight(children, {language: 'python'}).value
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function Quiz(props) {
  const [value, setValue] = React.useState('')
  const [color, setColor] = React.useState('white')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = (event.target as HTMLInputElement).value
    setValue(newValue)
    setColor(newValue == props.correct ? '#A1DD70' : '#FB4141')
  }
  return (
    <FormControl>
      <FormLabel sx={{color: color, '&.Mui-focused': {color: color}, fontWeight: "bold", fontStyle: "italic", cursor: 'text'}}>Test your understanding!</FormLabel>
      <FormLabel sx={{color: color, '&.Mui-focused': {color: color}, fontSize: "1.1rem", cursor: 'text'}}>{props.question}</FormLabel>
      <RadioGroup value={value} onChange={handleChange}>
        {props.answers.map((item: string, index: number) => (
          <FormControlLabel key={index} value={index} control={<Radio sx={{color: "white", '&.Mui-checked': {color: color}}} />} label={<KatexSpan>{item}</KatexSpan>} sx={{color: "white"}} />
        ))}
      </RadioGroup>
      {color != 'white' && (
          <FormLabel sx={{color: color, '&.Mui-focused': {color: color}, cursor: 'text'}}><b>{value == props.correct ? "Right!" : "Not quite."}</b> {props.explanation[Number(value)]}</FormLabel>
        )
      }
    </FormControl>
  )
}

function GHZInteractive() {
  const [assignment, setAssignment] = React.useState([['+', '+'], ['+', '+'], ['+', '+']])
  const [status, setStatus] = React.useState([true, false, false, false])
  const handleChange = (i: number, j: number) => {
    let newAssignment = assignment.map(arr => [...arr])
    newAssignment[i][j] = assignment[i][j] == '+' ? '-' : '+'
    setAssignment(newAssignment)
  }
  const symToNum = (sym: string) => (sym == '+' ? 1 : 0)
  React.useEffect(() => {
    setStatus([
      (symToNum(assignment[0][0])+symToNum(assignment[1][0])+symToNum(assignment[2][0])) % 2 == 1,
      (symToNum(assignment[0][1])+symToNum(assignment[1][1])+symToNum(assignment[2][0])) % 2 == 0,
      (symToNum(assignment[0][1])+symToNum(assignment[1][0])+symToNum(assignment[2][1])) % 2 == 0,
      (symToNum(assignment[0][0])+symToNum(assignment[1][1])+symToNum(assignment[2][1])) % 2 == 0,
    ])
  }, [assignment])
  return (
    <center>
      <p style={{fontSize: "1.1rem"}}><i>Click on the left table entries to change the assignment of symbols.</i></p>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "5rem"}}>
        <div><Table data={{headers: ["Player", "$X$", "$Y$"], rows: [["$A$", <div style={{cursor: "pointer", userSelect: "none"}} onClick={() => {handleChange(0,0)}}><InlineMath>{assignment[0][0]}</InlineMath></div>, <div style={{cursor: "pointer", userSelect: "none"}} onClick={() => {handleChange(0,1)}}><InlineMath>{assignment[0][1]}</InlineMath></div>], ["$B$", <div style={{cursor: "pointer", userSelect: "none"}} onClick={() => {handleChange(1,0)}}><InlineMath>{assignment[1][0]}</InlineMath></div>, <div style={{cursor: "pointer", userSelect: "none"}} onClick={() => {handleChange(1,1)}}><InlineMath>{assignment[1][1]}</InlineMath></div>], ["$C$", <div style={{cursor: "pointer", userSelect: "none"}} onClick={() => {handleChange(2,0)}}><InlineMath>{assignment[2][0]}</InlineMath></div>, <div style={{cursor: "pointer", userSelect: "none"}} onClick={() => {handleChange(2,1)}}><InlineMath>{assignment[2][1]}</InlineMath></div>]]}}/></div>
        <div><Table data={{headers: ["Input", "Output"], rows: [["$\\textit{XXX}$", <div style={{color: status[0] ? "#A1DD70" : "#FB4141"}}><InlineMath>{assignment[0][0]+assignment[1][0]+assignment[2][0]}</InlineMath></div>], ["$\\textit{YYX}$", <div style={{color: status[1] ? "#A1DD70" : "#FB4141"}}><InlineMath>{assignment[0][1]+assignment[1][1]+assignment[2][0]}</InlineMath></div>], ["$\\textit{YXY}$", <div style={{color: status[2] ? "#A1DD70" : "#FB4141"}}><InlineMath>{assignment[0][1]+assignment[1][0]+assignment[2][1]}</InlineMath></div>], ["$\\textit{XYY}$", <div style={{color: status[3] ? "#A1DD70" : "#FB4141"}}><InlineMath>{assignment[0][0]+assignment[1][1]+assignment[2][1]}</InlineMath></div>]]}}/></div>
      </div>
      <p style={{fontSize: "1.1rem"}}>This strategy only works {status.reduce((partial, a) => partial + +a, 0)/0.04}% of the time. Not ideal!</p>
    </center>
  )
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
  KatexSpan,
  InlineMath,
  m,
  Quiz,
  GHZInteractive,
}

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{scope: {pt0: m.useMovablePoint([1/Math.sqrt(2),1/Math.sqrt(2)])}}}
    />
  )
}
