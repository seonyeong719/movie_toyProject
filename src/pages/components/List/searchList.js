import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Error404 from '../../../Error/error404';
function SearchList({ data, isLoading, isError, error }) {
	const navigate = useNavigate();
	const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original/';

	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	//isError true일때 error핸들링하고
	if (isError) {
		return <Error404 />;
	}
	const scrollUp = () => {
		// top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<>
			<S.List>
				{data.results.map(el => {
					return (
						<S.Box onClick={() => navigate(`/detail/${el.id}`)}>
							<S.ImgWrap>
								<S.Img src={IMG_BASE_URL + el.poster_path} />
							</S.ImgWrap>
							<S.Contents>
								<S.Contents_Header>
									<div>{el.title}</div>
									<div>{el.vote_average}</div>
								</S.Contents_Header>
								<S.Contents_Body>{el.overview}</S.Contents_Body>
							</S.Contents>
						</S.Box>
					);
				})}
			</S.List>
			<S.UpBtn onClick={scrollUp}>UP!</S.UpBtn>
		</>
	);
}

export default SearchList;

const List = styled.div`
	background-color: rgb(132, 132, 132);
	border-top: 2px solid gray;
	display: flex;
	flex-wrap: wrap;
`;
const Box = styled.div`
	color: white;
	background-color: rgb(52, 52, 52);
	width: 350px;
	border-radius: 15px;
	margin: 40px;
	cursor: pointer;
`;
const Img = styled.img`
	height: 300px;
	width: 250px;
`;
const Contents = styled.div`
	padding: 8px 10px;
	border-top: 2px solid beige;
`;
const Contents_Header = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 20px;
`;
const Contents_Body = styled.div`
	padding: 20px;
	font-size: 18px;
`;
const ImgWrap = styled.div`
	display: flex;
	justify-content: center;
`;
const UpBtn = styled.button`
	padding: 22px;
	border-radius: 50%;
	background-color: rgb(152, 152, 152);
	position: sticky;
	left: 92%;
	bottom: 100px;
	box-shadow: -5px -5px rgb(102, 102, 102) inset;
	border: none;
	:hover {
		background-color: rgb(102, 102, 102);
	}
`;
const AddListBtn = styled.button`
	padding: 40px;
`;
const S = {
	List,
	Box,
	Img,
	Contents,
	Contents_Header,
	Contents_Body,
	ImgWrap,
	UpBtn,
	AddListBtn,
};