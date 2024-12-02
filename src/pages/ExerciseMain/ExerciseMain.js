import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import '../../assets/ExerciseMain.css';
import lowLevelImage from '../../assets/image/low-level.jpg';
import midLevelImage from '../../assets/image/mid-level.jpg';
import highLevelImage from '../../assets/image/high-level.jpg';

function ExerciseMain() {
    let [show, setShow] = useState(false);
    let navigate = useNavigate();

    // 모달 열기
    let ModalShow = () => setShow(true);

    // 모달 닫기
    let ModalClose = () => setShow(false);

    // 상세보기 페이지로 이동
    let DetailClick = () => {
        navigate('/details');
    };

    return (
        <div>
            <Row className="justify-content-center centered-row">
                <Card className="m-4" style={{ width: '22rem' }} >
                    <Card.Img variant="top" src={lowLevelImage} style={{ height: '220px', objectFit: 'cover' }} />
                    <Card.Body>
                        <Card.Title>초급 프로그램</Card.Title>
                        <Card.Text>내용</Card.Text>
                        <Button variant="danger" onClick={ModalShow}>자세히 알아보기</Button>
                    </Card.Body>
                </Card>

                <Card className="m-4" style={{ width: '22rem' }} >
                    <Card.Img variant="top" src={midLevelImage} style={{ height: '220px', objectFit: 'cover' }} />
                    <Card.Body>
                        <Card.Title>중급 프로그램</Card.Title>
                        <Card.Text>내용</Card.Text>
                        <Button variant="success" onClick={DetailClick}>자세히 알아보기</Button>
                    </Card.Body>
                </Card>

                <Card className="m-4" style={{ width: '22rem' }} >
                    <Card.Img variant="top" src={highLevelImage} style={{ height: '220px', objectFit: 'cover' }} />
                    <Card.Body>
                        <Card.Title>고급 프로그램</Card.Title>
                        <Card.Text>내용</Card.Text>
                        <Button variant="secondary" onClick={DetailClick}>자세히 알아보기</Button>
                    </Card.Body>
                </Card>

                {/* 모달 컴포넌트 */}
                <Modal show={show} onHide={ModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>프로그램 자세히 보기</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>모달 내용</Modal.Body>
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

export default ExerciseMain;
