import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import { fetchData, geocodeAddress } from './Util';
import json from '../data/clients.json';
import Countries from './Countries';
import Companies from './Companies';
import Cities from './Cities';
import MapView from './MapView';
import '../styles/app.css';

const api_key = '';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            countries: [],
            cities: [],
            companies: [],
            coords: { lat: 0, lng: 0 },
            fullAddress: { country: undefined, city: undefined, street: undefined }
        };
    }

    companyHandler = (street) => {
        this.setState(prev => ({
            fullAddress: { ...prev.fullAddress, street: street }
        }));

    }

    cityHandler = (city) => {
        var companies = this.state.data[this.state.fullAddress.country][city].sort();
        this.setState(prev => ({
            companies: companies,
            fullAddress: { ...prev.fullAddress, city: city }
        }));
    }

    countryHandler = (country) => {
        var cities = Object.keys(this.state.data[country]);
        var companies = this.state.data[country][cities[0]];
        this.setState(prev => ({
            cities: cities,
            companies: companies,
            fullAddress: { ...prev.fullAddress, country: country, city: cities[0], street: companies[0][1] }
        }));
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.fullAddress.street != prevState.fullAddress.street) {
            var coords = geocodeAddress(this.state.fullAddress, this.props.google);
            this.setState({ coords: coords });
        }
    }
    componentDidMount() {
        var data = fetchData(json.Customers);
        this.setState({ data: data });
    }

    markElement(element) {
        element.click();
    }

    render() {
        return (
            <div className="App">
                <div className="header">
                    <label><b>Countries</b></label>
                    <label><b>Cities</b></label>
                    <label><b>Companies</b></label>
                    <label><b>Map</b></label>
                </div>
                <div className="table">
                    <Countries markedRef={this.markElement} data={Object.keys(this.state.data)} handler={this.countryHandler} />
                    <Cities data={this.state.cities} handler={this.cityHandler} />
                    <Companies data={this.state.companies} handler={this.companyHandler} />
                    <MapView google={this.props.google} coords={this.state.coords} />
                </div>
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: api_key
})(App);
