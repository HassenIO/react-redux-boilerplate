import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, Paper, Table, TableHead, TableBody, TableRow, TableCell, Chip } from '@material-ui/core';
import { Layer, Title } from '../../components';
import './style.css';

function mapStateToProps(state) {
  return state;
}

// TODO: WILL BE REMOVED WHEN IMPLEMENTING DERVERLESS
function createData(id, name, status, color, addedAt) {
  return { id, name, status, color, addedAt };
}

const rows = [
  createData(1, 'file-1.png', 'Pending', 'default', '2018-10-20 18:24:00'),
  createData(2, 'file-2.jpg', 'Success', 'primary', '2018-10-20 18:24:00'),
  createData(3, 'file-3.pdf', 'Failed', 'secondary', '2018-10-20 18:24:00'),
  createData(4, 'file-4.jpeg', 'Some failed', 'secondary', '2018-10-20 18:24:00')
];
// END

class Project extends Component {
  handleRowClick = id => {
    this.props.history.push(`resource/${id}`);
  };

  render() {
    return (
      <div className="Project">
        <Layer>
          <Title>Project page</Title>
          <Typography variant="body1">This page will contain project description with the list of attached resources (files).</Typography>
          <Paper className="ProjectResourcesPaper">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Resource name</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell numeric>Added at</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => {
                  return (
                    <TableRow key={row.id} onClick={() => this.handleRowClick(row.id)} hover={true}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>
                        <Chip label={row.status} color={row.color} variant="outlined" />
                      </TableCell>
                      <TableCell numeric>{row.addedAt}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </Layer>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Project);
