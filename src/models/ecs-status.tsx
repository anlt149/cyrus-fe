import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";

import * as React from "react";

function createData(
  name: string,
  pendingCount: number,
  desiredCount: number,
  gitHash: string
) {
  return { name, pendingCount, desiredCount, gitHash };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, "git-12asdhaksjh1o73akdjh"),
  createData("pymts-dev", 159, 6.0, "git-12asdhaksjh1o73akdjh"),
  createData("Elsa", 159, 6.0, "git-12asdhaksjh1o73akdjh"),
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Ecs = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Container>
      <h3 className="text-xl mb-4">ECS status</h3>

      <FormControl fullWidth>
        <Grid container spacing={2}>
          <Grid item xl={8}>
            <InputLabel id="env">ENV</InputLabel>
            <Select
              labelId="env"
              id="demo-simple-select"
              value={age}
              label="Env"
              onChange={handleChange}
            >
              <MenuItem value={1}>DEV</MenuItem>
              <MenuItem value={2}>ST</MenuItem>
              <MenuItem value={3}>SIT1</MenuItem>
              <MenuItem value={4}>SIT4</MenuItem>
              <MenuItem value={5}>SIT5</MenuItem>
              <MenuItem value={6}>PERF</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </FormControl>

      {/* List */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Service</TableCell>
              <TableCell align="left">Running count</TableCell>
              <TableCell align="left">Desired count</TableCell>
              <TableCell align="left">Git hash</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.pendingCount}</TableCell>
                <TableCell align="left">{row.desiredCount}</TableCell>
                <TableCell align="left">{row.gitHash}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Ecs;
