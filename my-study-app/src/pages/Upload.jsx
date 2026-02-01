import "../styles/app.css";

export default function Upload() {
  return (
    <div className="page center">
      <h1 className="title">Upload your study material</h1>

      <label className="upload-box">
        <input type="file" hidden />
        <p>Click or drag PDF/Image here</p>
        <span>Supported: PDF, JPG, PNG</span>
      </label>

      <button className="primary-btn">Process & Learn 🚀</button>
    </div>
  );
}
