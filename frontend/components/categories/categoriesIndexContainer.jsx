import { connect } from 'react-redux';
import CategoriesIndex from './categoriesIndex';
import { selectCategories } from '../../reducers/selectors';
import { categoryFilterFetchEvents, fetchEvents, removeEvents } from '../../actions/event_actions';
import { resetSearch } from '../../actions/search_actions';
import { fetchCategories } from '../../actions/category_actions';

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories ? selectCategories(categories) : [],
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    categoryFilterFetchEvents: (catId) => dispatch(categoryFilterFetchEvents(catId)),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchEvents: () => dispatch(fetchEvents()),
    removeEvents: () => dispatch(removeEvents()),
    resetSearch: () => dispatch(resetSearch()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesIndex);