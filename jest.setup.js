import MockAsyncStorage from "mock-async-storage"
import Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"

const mockImpl = new MockAsyncStorage()
jest.mock("@react-native-community/async-storage", () => mockImpl)
Enzyme.configure({ adapter: new Adapter() })

window = {}
