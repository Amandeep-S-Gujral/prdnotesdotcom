import Container from "../container";

import contentListDispatcherFactory from "../dispatcher/contentListDispatcher";
import apiRequestModelFactory from "../model/apiRequestModel";
import { baseUrl } from "../systemConfig";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import BookCard from "../components/contentList/BookCard"
import Loading from "../components/general/Loading";

import WithListData from "../components/contentList/WithListData";

const container = new Container()

container.setInternalModule('contentDispatcher', contentListDispatcherFactory)
container.setInternalModule('apiRequestModel', apiRequestModelFactory)
container.setUrl('baseUrl', baseUrl)

container.setComponent('Header', Header)
container.setComponent('DisplayCard', BookCard)
container.setComponent('Loading', Loading)
container.setComponent('Footer', Footer)

const BookList = WithListData(container.getContainer())

export default BookList