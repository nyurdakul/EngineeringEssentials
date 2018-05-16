/**
 * Copyright 2018 Goldman Sachs.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import './style/App.css';
import Date from './components/Date'
import StockTicker from './components/StockTicker';
import LineChart from './components/charts/LineChart'
import SolChart from './components/charts/SolChart'
import companyData from './historicalStockData.json';
/**
 * TODO:
 * Import your components
 */


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            render: false,
            data: '',
            startDate: '',
            endDate: ''
            /**
             * TODO
             * Add state objects for the user inputs and anything else you may need to render the highchart.
             */
        };
        this.handleStockChange = this.handleStockChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);

    }

    handleStockChange(company){
        this.setState({data:company, render:true});
    }
    handleDateChange(startDate){
        console.log(startDate);
       // console.log(endDate);
       // this.setState({startDate:startDate, endDate:endDate});
    }



     /**
               * TODO
               * Render the StockTicker and Date components. You can use the date component twice
               * for both the start and end dates.
               * Add onChange props to the StockTicker and both Date components.
               * These props methods should set state and help determine if the
               * highchart should be displayed by changing the state of that boolean.
               * Don't forget to bind these methods!
               */

    render () {
   
        

      return (
          <div className="page-display">
              <div className="input">
              {
                <div><StockTicker onChange={this.handleStockChange}/>
              
                <div className="date-range">

                <div className='data-input'>
                <Date text='Start Date' onChange={this.handleDateChange}/></div> 

                <div className='data-input'>
                <Date text='End Date' onChange={this.handleDateChange}/></div> 


                </div></div>
                }
              </div>
              <div>
                {this.state.render && <SolChart title={this.state.data} data={companyData} />}
         
             </div>

                 {/**
                   *  TODO
                   *  Create a div element that shows a highchart when the ticker, start date, end date
                   *  states ALL have values and nothing (null) otherwise. You will need to use a conditional here
                   *  to help control rendering and pass these states as props to the component. This conditional can
                   *  be maintained as a state object.
                   *  http://reactpatterns.com/#conditional-rendering
                   */}

          </div>
      );
    }
}

export default App;
