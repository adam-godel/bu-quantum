'use client'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'
import KatexSpan from 'app/components/latex'
import * as m from 'mafs'
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material'
import { InlineMath } from 'react-katex'

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
  let codeHTML = highlight(children)
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
