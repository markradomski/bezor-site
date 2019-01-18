import React, { Component } from 'react';
import styled from 'styled-components';
import {
 Card, Checkbox, ImageModal, Input, Main, Select
} from 'components';
import { NoResultsFound } from 'theme/GlobalStyle';
import loadImage from 'utils/image-promise';
import { isEmpty } from 'utils/core-util';
import { images } from 'data/artworkData';
import * as constants from 'data/constants';
import config from 'data/siteConfig';

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	> label {
		font-weight: 400;
		margin-bottom: 0.5rem;
	}
`;

const CheckboxWrapper = styled.div`
	> div {
		display: flex;
		align-items: center;
		margin-top: 0.5rem;
		> label {
			font-weight: 400;
			margin-left: 0.5rem;
			margin-right: 0.5rem;
		}
	}
`;

const CardStyles = styled.a``;

export default class Artworks extends Component {
	state = {
		from: '',
		to: '',
		category: '',
		title: '',
		available: false,
		results: [],
		data: [],
		modalIsOpen: false,
		currentImage: 0,
		image: null
	};

	componentDidMount() {
		this.setState({
			data: this.sortImagesByDate(images),
			results: this.getInitialImageSet()
		});
		//	this.loadImage();
	}

	loadImage = () => {
		const { results } = this.state;
		const imageQueue = loadImage(results);

		imageQueue
			.then(results => console.log('Images loaded', results))
			.catch(error => console.log('ImageQueue error:', error));
	};

	sortImagesByDate = data => {
		if (isEmpty(data)) {
			return [];
		}
		return data.sort((a, b) => b.dateCreated - a.dateCreated);
	};

	getInitialImageSet = () => []; // (config && config.defaultArtworks ? config.defaultArtworks : []);

	handleTitleChange = inputName => event => {
		const { target } = event;
		const { value } = target;

		this.setState({
			[inputName]: value
		});
	};

	handleDateChange = inputName => event => {
		const { target } = event;
		const { value } = target;

		this.setState(
			{
				[inputName]: value !== 'All' ? parseInt(value, 10) : value
			},
			() => this.filterResultsByDateRange()
		);
	};

	handleCategoryChange = inputName => event => {
		const { target } = event;
		const { value } = target;

		this.setState(
			{
				[inputName]: value
			},
			() => this.filterResultsByCategory()
		);
	};

	handleAvailableChange = inputName => event => {
		const { target } = event;
		const value = target.checked;

		this.setState({
			[inputName]: value
		});
	};

	// title search takes priority -> reset other search criteria
	handleReturnPress = event => {
		const { data, title } = this.state;
		if (event.keyCode === 13) {
			const results =				typeof title === 'string' && !isEmpty(title) ? this.getResultsByTitle() : data;

			this.setState({
				from: '',
				to: '',
				category: 'all artworks',
				available: false,
				results
			});
		}
	};

	getResultsByTitle = () => {
		const { title, data } = this.state;

		const keywords = typeof title === 'string' ? title.toLowerCase() : null;

		if (isEmpty(data) || isEmpty(keywords)) {
			return [];
		}

		return data.filter(image => {
			const imageTitle = image && typeof image.title === 'string' ? image.title.toLowerCase() : '';
			return imageTitle.includes(keywords);
		});
	};

	getResultsByCategory = () => {
		const { category, data } = this.state;

		return category !== 'all artworks'
			? data.filter(
					image => image.categories.filter(categoryOption => categoryOption === category).length > 0
			  )
			: data;
	};

	getResultsByTitleAndCategory = () => {
		const { title, category } = this.state;
		let results = [];

		if (isEmpty(title)) {
			results = this.getResultsByCategory();
		} else {
			results = this.getResultsByTitle().filter(image => (category !== 'all artworks'
					? image.categories.filter(categoryOption => categoryOption === category).length > 0
					: this.getResultsByTitle())
			);
		}
		return results;
	};

	getResultsByTitleAndDate = () => {
		const {
 title, from, to, data
} = this.state;

		const results = !isEmpty(title) ? this.getResultsByTitle() : data;

		return results.filter(image => {
			// from and to
			if (from !== '' && to !== '') {
				return (
					(from === 'All'
						|| image.dateCreated >= from
						|| (image.dateUpdated && image.dateUpdated >= from))
					&& (to === 'All'
						|| image.dateCreated <= to
						|| (image.dateUpdated && image.dateUpdated <= to))
				);
			}

			// from
			if (from !== '' && to === '') {
				return (
					from === 'All'
					|| image.dateCreated >= from
					|| (image.dateUpdated && image.dateUpdated >= from)
				);
			}

			// to
			if (from === '' && to !== '') {
				return (
					to === 'All' || image.dateCreated <= to || (image.dateUpdated && image.dateUpdated <= to)
				);
			}

			// no dates selected
			if (from === '' && to === '') {
				return true;
			}

			return false;
		});
	};

	filterResultsByCategory = () => {
		const { category, data } = this.state;

		const imageList = !isEmpty(this.getResultsByTitleAndDate())
			? this.getResultsByTitleAndDate()
			: data;

		if (isEmpty(imageList)) {
			return [];
		}

		const filteredResults =			category !== 'all artworks'
				? imageList.filter(
						image => image.categories.filter(categoryOption => categoryOption === category).length > 0
				  )
				: imageList;

		this.setState({
			results: filteredResults
		});

		return undefined; // linting
	};

	/**
	 * get results by title or all data if no title (regardless of category selected)
	 * reset category
	 *
	 */

	filterResultsByDateRange = () => {
		const { from, to, data } = this.state;

		const imageList = !isEmpty(this.getResultsByTitle()) ? this.getResultsByTitle() : data;

		if (isEmpty(imageList)) {
			return [];
		}

		const filteredResults = imageList.filter(image => {
			// from and to
			if (from !== '' && to !== '') {
				return (
					(from === 'All'
						|| image.dateCreated >= from
						|| (image.dateUpdated && image.dateUpdated >= from))
					&& (to === 'All'
						|| image.dateCreated <= to
						|| (image.dateUpdated && image.dateUpdated <= to))
				);
			}

			// from
			if (from !== '' && to === '') {
				return (
					from === 'All'
					|| image.dateCreated >= from
					|| (image.dateUpdated && image.dateUpdated >= from)
				);
			}

			// to
			if (from === '' && to !== '') {
				return (
					to === 'All' || image.dateCreated <= to || (image.dateUpdated && image.dateUpdated <= to)
				);
			}

			return false;
		});

		this.setState({
			results: filteredResults,
			category: 'all artworks'
		});

		return undefined; // linting
	};

	getCategoryOptions = () => {
		const { results, data } = this.state;
		const imageList = !isEmpty(results) ? results : data;
		const allCategories = [].concat.apply([], imageList.map(image => image.categories)); // .flat() not supported in

		const filteredCategories = allCategories
			.filter(
				(value, index, self) => self.indexOf(value) === index && value !== null && value !== undefined
			)
			.sort((a, b) => a - b);

		return ['all artworks', ...filteredCategories]; // prepend 'all artworks' to list
	};

	getImageSrc = image => (image && image.src ? constants.IMAGE_PATH_350 + image.src : '');

	// test
	__getImageSrc = image => (image && image.src ? 'http://www.bezor.com.au/' + constants.IMAGE_PATH_350 + image.src : '');

	getYearLabel = image => {
		let yearLabel = '';

		if (image && image.dateCreated && image.dateUpdated) {
			yearLabel = `${image.dateCreated} - ${image.dateUpdated}`;
		}
		if (image && image.dateCreated && !image.dateUpdated) {
			yearLabel = image.dateCreated;
		}

		return yearLabel;
	};

	getTitleLabel = image => (image && image.title ? image.title : '');

	getYearOptions = () => {
		const { data } = this.state;
		if (isEmpty(data)) {
			return [];
		}

		const imageList = !isEmpty(this.getResultsByTitleAndCategory())
			? this.getResultsByTitleAndCategory()
			: data;

		const createdYears = imageList.map(image => image.dateCreated);
		const updatedYears = imageList.map(image => image.dateUpdated);

		const allYears = [...createdYears, ...updatedYears]
			.filter(
				(value, index, self) => self.indexOf(value) === index && value !== null && value !== undefined
			)
			.sort((a, b) => a - b);

		return ['All', ...allYears]; // prepend 'All' to list
	};

	handleReset = () => {
		this.setState({
			from: '',
			to: '',
			title: '',
			category: '',
			available: false,
			results: this.getInitialImageSet()
		});
	};

	openImageModal(image, index, event) {
		event.preventDefault();
		this.setState({
			currentImage: index,
			modalIsOpen: true,
			image
		});
	}

	closeImageModal = () => {
		this.setState({
			currentImage: 0,
			modalIsOpen: false,
			image: null
		});
	};

	gotoPrevious = () => {
		this.setState({
			currentImage: this.state.currentImage - 1
		});
	};

	gotoNext = () => {
		this.setState({
			currentImage: this.state.currentImage + 1
		});
	};

	render() {
		const {
 from, to, category, title, available, results
} = this.state;

		const displayedResults = available ? results.filter(image => image.sold !== true) : results;

		return (
			<Main heading="Artworks">
				<div className="row">
					<InputWrapper className="form-group col-6 col-sm-6 col-md-4 col-lg-3">
						<Select
							options={this.getYearOptions()}
							onChange={this.handleDateChange('from')}
							value={from}
							placeholder="From"
						/>
					</InputWrapper>
					<InputWrapper className="form-group col-6 col-sm-6 col-md-4 col-lg-3">
						<Select
							options={this.getYearOptions()}
							onChange={this.handleDateChange('to')}
							value={to}
							placeholder="To"
						/>
					</InputWrapper>
					<InputWrapper className="form-group col-6 col-sm-6 col-md-4 col-lg-3">
						<Select
							options={this.getCategoryOptions()}
							onChange={this.handleCategoryChange('category')}
							value={category}
							placeholder="Category"
						/>
					</InputWrapper>
					<InputWrapper className="form-group col-12 col-sm-6 col-md-4 col-lg-3">
						<Input
							onChange={this.handleTitleChange('title')}
							onKeyDown={this.handleReturnPress}
							value={title}
							placeholder="Title"
						/>
					</InputWrapper>
					<CheckboxWrapper className="form-group col-12 col-sm-6 col-md-4 col-lg-3">
						<div>
							<Checkbox onChange={this.handleAvailableChange('available')} value={available} />
							<label className="form-check-label">Available</label>
							<button type="button" className="btn btn-link" onClick={this.handleReset}>
								reset
							</button>
						</div>
					</CheckboxWrapper>
				</div>

				<div className="row">
					{/* 					<CardStyles
						className="col-12 col-sm-6 col-md-4 col-lg-3"

					>
						<Card
							src={setTimeout(() => {
								this.getImageSrc({src:'/assets/img/w350/face-value_7-2011_lg.jpg'})
							}, 2000) }
							title="Testing"
							year="2018"
						/>
					</CardStyles> */}
					{!isEmpty(displayedResults) ? (
						displayedResults.map((image, index) => (
							<CardStyles
								className="col-12 col-sm-6 col-md-4 col-lg-3"
								key={index}
								href={image.src}
								onClick={e => this.openImageModal(image, index, e)}
							>
								<Card
									src={this.getImageSrc(image)}
									title={this.getTitleLabel(image)}
									year={this.getYearLabel(image)}
								/>
							</CardStyles>
						))
					) : (
						<NoResultsFound>No images found</NoResultsFound>
					)}
				</div>
				<ImageModal
					currentImage={this.state.currentImage}
					onClose={this.closeImageModal}
					isOpen={this.state.modalIsOpen}
					image={this.state.image}
				/>
			</Main>
		);
	}
}
