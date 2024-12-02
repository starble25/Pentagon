import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import './ExerciseMain.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import DetailPage from './DetailPage';


function ExerciseMain() {
    let [show, setShow] = useState(false);

    // 모달 열기
    let ModalShow = () => setShow(true);

    // 모달 닫기
    let ModalClose = () => setShow(false);

    let navigate = useNavigate(); // useNavigate 훅 사용


    let DetailClick = () => { // 상세보기 클릭시 다른 페이지로 이동
        navigate('/details');
    };
    return (
        <div>
            <Row className="justify-content-center centered-row">
                <Card className="m-4" style={{ width: '22rem' }} >
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/image/low-level.jpg'} style={{ height: '220px', objectFit: 'cover' }} />
                    <Card.Body>
                        <Card.Title>초급 프로그램</Card.Title>
                        <Card.Text>
                            내용
                        </Card.Text>
                        <Button variant="danger" onClick={ModalShow}>자세히 알아보기</Button>
                    </Card.Body>
                </Card>

                <Card className="m-4" style={{ width: '22rem' }} >
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/image/mid-level.jpg'} style={{ height: '220px', objectFit: 'cover' }} />
                    <Card.Body>
                        <Card.Title>중급 프로그램</Card.Title>
                        <Card.Text>
                            내용
                        </Card.Text>
                        <Button variant="success" onClick={DetailClick}>자세히 알아보기</Button>
                    </Card.Body>
                </Card>

                <Card className="m-4" style={{ width: '22rem' }} >
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/image/high-level2.jpg'} style={{ height: '220px', objectFit: 'cover' }} />
                    <Card.Body>
                        <Card.Title>고급 프로그램</Card.Title>
                        <Card.Text>
                            내용
                        </Card.Text>
                        <Button variant="secondary" onClick={DetailClick}>자세히 알아보기</Button>
                    </Card.Body>
                </Card>

                {/* 모달 컴포넌트 */}
                <Modal show={show} onHide={ModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>프로그램 자세히 보기</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        모달
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={ModalClose}>
                            닫기
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Row>
        </div>
    );
}
// "primary"    파란색 강조 버튼
// "secondary"  회색 버튼
// "success"    초록색 버튼
// "danger"     빨간색 버튼
// "warning"    노란색 버튼
// "info"       파란색 버튼
// "light"      밝은 회색 버튼
// "dark"       어두운 회색 버튼
// "link"       링크 스타일의 버튼
export default ExerciseMain;