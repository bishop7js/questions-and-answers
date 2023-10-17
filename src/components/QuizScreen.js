import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const QuizScreen = () => {
  const [text, setText] = useState("Whats is capital of Sri Lanaka ?");
  const [color, setColor] = useState("#C3F4F9");

  const renderQuizCard = () => {
    return (
      <div
        onClick={() => {
          setText("Colombo");
          setColor("#BDFBC4");
        }}
      >
        <Card style={{ backgroundColor: color }}>
          <CardContent>
            <Typography>{text}</Typography>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div>
      <h1>Quiz Application</h1>
      <div>{renderQuizCard()}</div>
    </div>
  );
};

export default QuizScreen;
