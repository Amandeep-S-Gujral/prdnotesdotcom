import Container from "../container";

import {Link} from 'react-router-dom'
import contentDispatcherFactory from "../dispatcher/contentDispatcher";
import apiRequestModelFactory from "../model/apiRequestModel";
import { baseUrl } from "../systemConfig";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ArticleCard from "../components/contentList/ArticleCard"
import Loading from "../components/general/Loading";

import WithListData from "../components/contentList/WithListData";

const container = new Container()

container.setExternalModule('Link', Link)

container.setInternalModule('contentDispatcher', contentDispatcherFactory)
container.setInternalModule('apiRequestModel', apiRequestModelFactory)
container.setUrl('baseUrl', baseUrl)

container.setComponent('Header', Header)
container.setComponent('DisplayCard', ArticleCard)
container.setComponent('Loading', Loading)
container.setComponent('Footer', Footer)

const ArticleList = WithListData(container.getContainer())

export default ArticleList