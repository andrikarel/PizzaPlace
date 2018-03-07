import React from 'react';
import  {connect} from 'react-redux';
import {getAllOffers} from '../../actions/pizzaActions'
import Offer from '../Offer/Offer';

class OfferMenu extends React.Component {
    componentDidMount() {
        const {getAllOffers} = this.props;
        getAllOffers();
    }
    render() {
        const {offer} = this.props;
        return (
            <div>
                <h1 className="pageTitle">- Offers -</h1>
                {offer.map(o=><Offer key={o.id}offer={o}/>)}
            </div>
        )
    }
};
const mapStateToProps = ({offer}) => {
    return {offer}
}
export default connect(mapStateToProps,{getAllOffers})(OfferMenu);