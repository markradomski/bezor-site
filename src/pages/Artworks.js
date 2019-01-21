import React, { Component } from 'react';
import styled from 'styled-components';
import {
 Card, Checkbox, ImageModal, Input, Main, Select
} from 'components';
import { NoResultsFound } from 'theme/GlobalStyle';
import loadImage from 'utils/image-promise';
import { isEmpty } from 'utils/core-util';
import { currentYear } from 'utils/date-util';
import { images } from 'data/artworkData';
import * as constants from 'data/constants';
import {
	categoryOptions,
	categoryDefault,
	oldestDateCreated
} from 'data/siteConfig';

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
		margin-top: -0.3rem;
		> label {
			font-weight: 400;
			margin-left: 0.5rem;
			margin-right: 0.5rem;
		}
	}
`;

const ResetButton = styled.button`
	align-self: flex-start;
	padding: 0;
	text-decoration: none !important;
	line-height: unset;
	letter-spacing: 0.05em;
`;

const CardStyles = styled.div``;

export default class Artworks extends Component {
	state = {
		title: '',
		category: categoryDefault,
		available: false,
		results: [],
		data: [],
		modalIsOpen: false,
		currentImage: 0,
		image: null
	};

	componentDidMount() {
		this.setState(
			{
				data: this.sortImagesByDate(images)
			},
			() => this.setCategorySelectedResults()
		);
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

	handleChange = name => e => {
		const { type, value } = e.target;
		const val =			type === 'number' || name === 'category' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	// return all results if blank
	handleReturnPress = event => {
		const { data, title } = this.state;
		if (event.keyCode === 13) {
			const results =				typeof title === 'string' && !isEmpty(title)
					? this.getResultsByTitle()
					: data;

			this.setState({
				category: 0, // set to all artwork
				available: false,
				results
			});
		}
	};

	handleCategoryChange = name => e => {
		const { value } = e.target;
		this.setState(
			{
				[name]: parseFloat(value),
				title: '',
				available: false
			},
			() => this.setCategorySelectedResults()
		);
	};

	handleAvailableChange = name => event => {
		const { target } = event;
		const value = target.checked;

		this.setState({
			[name]: value
		});
	};

	// assume data date-sorted
	getAllResults = () => {
		const { data } = this.state;

		if (isEmpty(data)) {
			return [];
		}
		return data;
	};

	getResultsByTitle = () => {
		const { title, data } = this.state;
		const keywords = typeof title === 'string' ? title.toLowerCase() : null;

		if (isEmpty(data) || isEmpty(keywords)) {
			return [];
		}

		return data.filter(image => {
			const imageTitle =				image && typeof image.title === 'string'
					? image.title.toLowerCase()
					: '';
			return imageTitle.includes(keywords);
		});
	};

	getImageSrc = image => (image && image.src ? constants.IMAGE_PATH_350 + image.src : '');

	// test
	__getImageSrc = image => (image && image.src
			? `http://www.bezor.com.au/${constants.IMAGE_PATH_350}${image.src}`
			: '');

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

	isCategory = (image, category) => (image.categories
			? image.categories.filter(categoryOption => categoryOption === category)
					.length > 0
			: false);

	setCategorySelectedResults() {
		const { data, category } = this.state;
		let from = oldestDateCreated;
		let to = currentYear();
		const imageList = data;

		const filteredResults = imageList.filter(image => {
			// All artworks
			if (category === 0) {
				return true;
			}
			// 2008 - present
			if (category === 1) {
				from = 2008;
				return (
					!this.isCategory(image, 'prints')
					&& (image.dateCreated >= from
						|| (image.dateUpdated && image.dateUpdated >= from))
					&& (image.dateCreated <= to
						|| (image.dateUpdated && image.dateUpdated <= to))
				);
			}
			// 1997 - 2007
			if (category === 2) {
				from = 1997;
				to = 2007;
				return (
					!this.isCategory(image, 'prints')
					&& (image.dateCreated >= from
						|| (image.dateUpdated && image.dateUpdated >= from))
					&& (image.dateCreated <= to
						|| (image.dateUpdated && image.dateUpdated <= to))
				);
			}
			// 1987 - 2006
			if (category === 3) {
				from = 1987;
				to = 2006;
				return (
					!this.isCategory(image, 'prints')
					&& (image.dateCreated >= from
						|| (image.dateUpdated && image.dateUpdated >= from))
					&& (image.dateCreated <= to
						|| (image.dateUpdated && image.dateUpdated <= to))
				);
			}
			// 1977 - 1986
			if (category === 4) {
				from = oldestDateCreated;
				to = 1986;
				return (
					!this.isCategory(image, 'prints')
					&& (image.dateCreated >= from
						|| (image.dateUpdated && image.dateUpdated >= from))
					&& (image.dateCreated <= to
						|| (image.dateUpdated && image.dateUpdated <= to))
				);
			}
			// Prints
			if (category === 5) {
				return this.isCategory(image, 'prints');
			}

			return false;
		});

		this.setState({
			results: filteredResults
		});

		return undefined; // linting
	}

	handleReset = () => {
		this.setState(
			{
				category: categoryDefault,
				title: '',
				available: false
			},
			() => this.setCategorySelectedResults()
		);
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

	getCategoryLabel = (value, categories) => categories.find(obj => obj.value === value).label;

	getHeadingText = () => {
		const { category } = this.state;
		return `Artworks / ${this.getCategoryLabel(category, categoryOptions)}`;
	};

	getResetButton = () => (
		<ResetButton
			type="button"
			className="btn btn-link"
			onClick={this.handleReset}
		>
			reset
		</ResetButton>
	);

	render() {
		const {
 category, title, available, results
} = this.state;

		const displayedResults = available
			? results.filter(image => image.sold !== true)
			: results;

		return (
			<Main heading={this.getHeadingText()}>
				<div className="row">
					<InputWrapper className="form-group col-6 col-sm-6 col-md-4 col-lg-3">
						<label htmlFor="">Category</label>
						<Select
							options={categoryOptions}
							onChange={this.handleCategoryChange('category')}
							value={category}
						/>
					</InputWrapper>
					<InputWrapper className="form-group col-12 col-sm-6 col-md-4 col-lg-3">
						<label htmlFor="">Title / description</label>
						<Input
							onChange={this.handleChange('title')}
							onKeyDown={this.handleReturnPress}
							value={title}
							placeholder="Title"
						/>
					</InputWrapper>
					<CheckboxWrapper className="form-group col-12 col-sm-6 col-md-4 col-lg-3">
						<div>
							<Checkbox
								onChange={this.handleAvailableChange('available')}
								value={available}
							/>
							<label className="form-check-label">Available</label>
							<ResetButton
								type="button"
								className="btn btn-link"
								onClick={this.handleReset}
							>
								reset
							</ResetButton>
						</div>
					</CheckboxWrapper>
				</div>
				<div className="row">
					{!isEmpty(displayedResults) ? (
						displayedResults.map((image, index) => (
							<CardStyles
								className="col-12 col-sm-6 col-md-4 col-lg-3"
								key={image.src + image.medium}
							>
								<a
									href={image.src}
									onClick={e => this.openImageModal(image, index, e)}
								>
									<Card
										src={this.getImageSrc(image)}
										title={this.getTitleLabel(image)}
										year={this.getYearLabel(image)}
										sold={image.sold}
									/>
								</a>
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
