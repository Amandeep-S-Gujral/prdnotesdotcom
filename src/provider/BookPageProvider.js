import Container from "../container";

import contentBodyDispatcherFactory from "../dispatcher/contentBodyDispatcher";
import apiRequestModelFactory from "../model/apiRequestModel";
import { baseUrl } from "../systemConfig";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Loading from "../components/general/Loading";
// import Page from "../components/contentPage/Page"
import SocialBar from "../components/socialAttribute/SocialBar";
import SocialAttributeButton from "../components/socialAttribute/SocialAttributeButton";
import CommentBox from "../components/comment/CommentBox";
import Share from "../components/general/Share";

import renderBook from "../utils/renderBook"
import WithContentData from "../components/contentPage/WithContentData";

const container = new Container()

container.setInternalModule('contentDispatcher', contentBodyDispatcherFactory)
container.setInternalModule('apiRequestModel', apiRequestModelFactory)
container.setUrl('baseUrl', baseUrl)

container.setComponent('Header', Header)
container.setComponent('Footer', Footer)
container.setComponent('Loading', Loading)
// container.setComponent('Page', Page)
container.setComponent('render', renderBook)
container.setComponent('SocialBar', SocialBar )
container.setComponent('SocialAttributeButton', SocialAttributeButton)
container.setComponent('CommentBox', CommentBox)
container.setComponent('Share', Share)

const BookPage = WithContentData(container.getContainer())

export default BookPage