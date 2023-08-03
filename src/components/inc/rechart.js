import data from "./metric.json";
import React, { useState } from "react";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const Rechart = () => {
  const [isG1, setIsG1] = useState(true);
  const [isG2, setIsG2] = useState(false);
  const [isG3, setIsG3] = useState(false);
  const [isG4, setIsG4] = useState(false);

  const G1T = () => {
    setIsG1(true);
    setIsG2(false);
    setIsG3(false);
    setIsG4(false);
  };
  const G2T = () => {
    setIsG1(false);
    setIsG2(true);
    setIsG3(false);
    setIsG4(false);
  };
  const G3T = () => {
    setIsG1(false);
    setIsG2(false);
    setIsG3(true);
    setIsG4(false);
  };
  const G4T = () => {
    setIsG1(false);
    setIsG2(false);
    setIsG3(false);
    setIsG4(true);
  };

  return (
    <>
      {isG1 && (
        <div class="row">
          <div class="col">
            <button class="btn btn-primary btn-lg" onClick={G4T}>
              pre
            </button>
          </div>
          <div class="col">
            <ResponsiveContainer width={700} height={500}>
              <LineChart data={data}>
                <Line
                  type="monotone"
                  dataKey="train_accuracy"
                  stroke="#F44236"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="val_accuracy"
                  stroke="#2196F3"
                  strokeWidth={3}
                />
                <XAxis dataKey="index" />
                <YAxis domain={[0.4, 1.1]} />
                <Tooltip />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div class="col">
            <button class="btn btn-primary btn-lg" onClick={G2T}>
              next
            </button>
          </div>
        </div>
      )}
      {isG2 && (
        <div class="row">
          <div class="col">
            <button class="btn btn-primary btn-lg" onClick={G1T}>
              pre
            </button>
          </div>
          <div class="col">
            <ResponsiveContainer width={700} height={500}>
              <LineChart data={data}>
                <Line
                  type="monotone"
                  dataKey="train_auc"
                  stroke="#F44236"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="val_auc"
                  stroke="#2196F3"
                  strokeWidth={3}
                />
                <XAxis dataKey="index" />
                <YAxis domain={[0.7, 1.1]} />
                <Tooltip />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div class="col">
            <button class="btn btn-primary btn-lg" onClick={G3T}>
              next
            </button>
          </div>
        </div>
      )}
      {isG3 && (
        <div class="row">
          <div class="col">
            <button class="btn btn-primary btn-lg" onClick={G2T}>
              pre
            </button>
          </div>
          <div class="col">
            <ResponsiveContainer width={700} height={500}>
              <LineChart data={data}>
                <Line
                  type="monotone"
                  dataKey="train_precision"
                  stroke="#F44236"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="val_precision"
                  stroke="#2196F3"
                  strokeWidth={3}
                />
                <XAxis dataKey="index" />
                <YAxis domain={[0.5, 1.1]} />
                <Tooltip />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div class="col">
            <button class="btn btn-primary btn-lg" onClick={G4T}>
              next
            </button>
          </div>
        </div>
      )}
      {isG4 && (
        <div class="row">
          <div class="col">
            <button class="btn btn-primary btn-lg" onClick={G3T}>
              pre
            </button>
          </div>
          <div class="col">
            <ResponsiveContainer width={700} height={500}>
              <LineChart data={data}>
                <Line
                  type="monotone"
                  dataKey="train_recall"
                  stroke="#F44236"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="val_recall"
                  stroke="#2196F3"
                  strokeWidth={3}
                />
                <XAxis dataKey="index" />
                <YAxis domain={[0.2, 1.1]} />
                <Tooltip />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div class="col">
            <button class="btn btn-primary btn-lg" onClick={G1T}>
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Rechart;
