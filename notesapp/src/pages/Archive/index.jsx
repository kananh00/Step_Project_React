import React, { useState, useEffect } from "react";
import styled from 'styled-components';
export const Archive = () => {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
      const res = await fetch("http://localhost:3001/notes?status=archive");
      const data = await res.json();
      setNotes(data);
  };

  useEffect(() => {getNotes();}, []);
 
  return (
    <ArchiveContainer>
        {notes.map(({ id, title, text, date, color }) => (
          <ArchiveNote key={id} color = {color}>
            <h2 className = "title_note">{title}</h2>
            <h4 style = {{color: "rgb(245,245,245)"}}>{new Date(date).toUTCString()}</h4>
            <p className = "text_note">{text}</p>
          </ArchiveNote>
        ))}
    </ArchiveContainer>
  );
};

const ArchiveContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 50px auto;
`;
const ArchiveNote = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 20%;
    min-height: 200px;
    border: 3px solid transparent;
    background-color: ${p => p.color};
    color: rgb(245,245,245);
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    &:not(:nth-child(4n));
        margin-right: 20px;
`;